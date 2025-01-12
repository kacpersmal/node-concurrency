import { Worker, isMainThread, parentPort, workerData } from "worker_threads";

if (isMainThread) {
  // This block of code will be executed in the main thread

  console.log("Main thread: Starting worker thread...");

  // Create a new worker thread
  const worker = new Worker("./src/worker-threads/worker-thread.js", {
    workerData: { start: 1, end: 1000000000 }, // Data to be sent to the worker thread
  });

  // Listen for messages from the worker thread
  worker.on("message", (result) => {
    console.log(`Main thread: Received result from worker thread: ${result}`);
  });

  // Listen for errors from the worker thread
  worker.on("error", (error) => {
    console.error(`Main thread: Error from worker thread: ${error}`);
  });

  // Listen for the worker thread to exit
  worker.on("exit", (code) => {
    if (code !== 0) {
      console.error(`Main thread: Worker stopped with exit code ${code}`);
    } else {
      console.log("Main thread: Worker finished successfully");
    }
  });
}

console.log("Are we there yet?");
