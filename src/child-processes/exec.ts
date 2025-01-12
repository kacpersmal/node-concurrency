import { exec } from "child_process";

console.log("Starting child process...");

// The exec function is used to run a shell command from within a Node.js application.
// It spawns a new shell and executes the command within that shell.
exec("ls -l", (error, stdout, stderr) => {
  // This callback function is called when the command execution is complete.
  // It receives three arguments:
  // - error: If the command fails, this will contain the error information.
  // - stdout: This contains the standard output of the command.
  // - stderr: This contains the standard error output of the command.

  if (error) {
    // If there is an error, log it and return.
    console.error(`Error executing command: ${error.message}`);
    return;
  }

  if (stderr) {
    // If there is any error output, log it.
    console.error(`Standard error: ${stderr}`);
  }

  // Log the standard output of the command.
  console.log(`Standard output:\n${stdout}`);
});

console.log("Child process started.");
