import { fork } from "child_process";

console.log("Starting child process...");

// The fork function is a special case of spawn used to create Node.js processes.
// It spawns a new Node.js process and establishes an IPC (Inter-Process Communication) channel.
const child = fork("./src/child-processes/child.js");

// Listen for messages from the child process.
child.on("message", (message) => {
  console.log(`Received message from child: ${message}`);
});

// Send a message to the child process.
child.send("Hello from parent");

// The 'exit' event is emitted when the child process exits.
child.on("exit", (code) => {
  console.log(`Child process exited with code ${code}`);
});

console.log("Child process started.");
