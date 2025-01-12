// The cpuIntensiveTask function is blocking because it performs a heavy computation
// in a tight loop for 5 seconds. During this time, the event loop is blocked and
// cannot process any other events or I/O operations. This means that the "End."
// message will not be logged until the CPU-intensive task is completed.
function cpuIntensiveTask() {
  const start = Date.now();
  while (Date.now() - start < 5000) {
    // Simulate a heavy computation blocking the event loop for 5 seconds
  }
  console.log("CPU-intensive task completed");
}

console.log("Start...");
cpuIntensiveTask(); // Blocks the event loop
console.log("End."); // Delayed until the CPU task completes
