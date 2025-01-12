// clusterExample.ts
import cluster from "cluster";
import os from "os";
import http from "http";

if (cluster.isPrimary) {
  const numCPUs = os.cpus().length;
  console.log(`Primary process is running, PID: ${process.pid}`);
  console.log(`Forking server on ${numCPUs} CPUs...`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker) => {
    console.log(`Worker ${worker.process.pid} died. Forking a new one...`);
    cluster.fork();
  });
} else {
  // Worker processes have a http server
  http
    .createServer((req, res) => {
      // Simulate a CPU-intensive task that blocks the event loop with random duration
      const start = Date.now();
      while (Date.now() - start < Math.random() * 5000) {
        // Simulate a heavy computation blocking the event loop for a random duration
      }
      res.writeHead(200);
      res.end(`Handled by worker ${process.pid}`);
    })
    .listen(3000);

  console.log(`Worker started, PID: ${process.pid}`);
}
