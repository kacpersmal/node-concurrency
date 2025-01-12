import { spawn } from "child_process";

console.log("Starting child process...");

// The spawn function is used to launch a new process with a given command.
// Unlike exec, spawn does not create a shell and is more efficient for long-running processes.
const child = spawn("ls", ["-l"]);

// The 'data' event is emitted when the child process writes to stdout.
child.stdout.on("data", (data) => {
  console.log(`Standard output:\n${data}`);
});

// The 'data' event is emitted when the child process writes to stderr.
child.stderr.on("data", (data) => {
  console.error(`Standard error:\n${data}`);
});

// The 'close' event is emitted when the child process exits.
child.on("close", (code) => {
  console.log(`Child process exited with code ${code}`);
});

console.log("Child process started.");
