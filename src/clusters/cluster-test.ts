import http from "http";

const NUM_REQUESTS = 20; // Number of requests to send
const CONCURRENCY = 10; // Number of concurrent requests

function sendRequest(requestNumber: number): Promise<void> {
  return new Promise((resolve, reject) => {
    const req = http.request(
      {
        hostname: "localhost",
        port: 3000,
        path: "/",
        method: "GET",
      },
      (res) => {
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
        });
        res.on("end", () => {
          console.log(`Request ${requestNumber}: ${data}`);
          resolve();
        });
      }
    );

    req.on("error", (err) => {
      console.error(`Request ${requestNumber} failed: ${err.message}`);
      resolve(); // Resolve even on error to continue the flow
    });

    req.end();
  });
}

async function main(): Promise<void> {
  const activePromises: Promise<void>[] = [];

  for (let i = 0; i < NUM_REQUESTS; i++) {
    const requestPromise = sendRequest(i + 1);
    activePromises.push(requestPromise);

    if (activePromises.length >= CONCURRENCY) {
      // Wait for the first promise in the active queue to resolve
      await Promise.race(activePromises);

      // Remove completed promises from the active queue
      activePromises.splice(
        activePromises.findIndex((p) => p === requestPromise),
        1
      );
    }
  }

  // Wait for all remaining promises to resolve
  await Promise.all(activePromises);

  console.log("All requests completed.");
}

// Start the script
main().catch((err) => console.error(`Error in main: ${err.message}`));
