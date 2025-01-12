process.on("message", (message) => {
  console.log(`Received message from parent: ${message}`);

  // Send a message back to the parent process
  process.send("Hello from child");
});

// Simulate some work in the child process
setTimeout(() => {
  console.log("Child process work done");
  process.exit(0);
}, 2000);
