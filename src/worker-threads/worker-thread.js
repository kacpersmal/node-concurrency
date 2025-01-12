const { parentPort, workerData } = require("worker_threads");

console.log("Worker thread: Started");

// Function to perform a CPU-intensive task
const performTask = (start, end) => {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
};

// Perform the task with the data received from the main thread
const result = performTask(workerData.start, workerData.end);

// Send the result back to the main thread
if (parentPort) {
  parentPort.postMessage(result);
} else {
  console.error("Worker thread: parentPort is not available");
}
console.log("Worker thread: Task completed");
