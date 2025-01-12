import fs from "fs";
console.log("Start reading file...");

// Asynchronous file read (non-blocking)
// The readFile function is non-blocking because it uses a callback function.
// This means that the file reading operation is offloaded to the system's I/O
// and the main thread can continue executing the next lines of code without waiting
// for the file reading to complete. When the file reading is done, the callback
// function is invoked with the result.
fs.readFile("example.txt", "utf8", (err: any, data: any) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File content:", data);
});

console.log("File read request sent."); // This runs immediately without waiting for the file.
