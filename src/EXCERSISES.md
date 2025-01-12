# Exercises

## Exercise 1: Asynchronous File Write

### Task:

1. Implement a function that writes data to a file asynchronously using `fs.promises.writeFile`.
2. Log a message indicating that the file has been written successfully.

### Hint:

- Use `fs.promises.writeFile` to write data to the file asynchronously.
- Handle errors using `try...catch`.

---

## Exercise 2: CPU-bound Task with Prime Numbers

### Task:

1. Implement a function that finds all prime numbers up to a given limit.
2. Measure and log the time taken to complete the task.

### Hint:

- Use a loop to check for prime numbers.
- Use `console.time` and `console.timeEnd` to measure the time taken.

---

## Exercise 3: Child Process - spawn

### Task:

1. Use the `spawn` function to run a shell command that pings a website.
2. Log the output of the command to the console.

### Hint:

- Use `spawn` from the `child_process` module.
- Handle the `stdout` and `stderr` streams.

---

## Exercise 4: Clusters with Load Simulation

### Task:

1. Create a simple HTTP server using the `cluster` module.
2. Fork worker processes based on the number of CPU cores.
3. Each worker should simulate a load by performing a CPU-intensive task before responding to the request.

### Hint:

- Use `cluster.isPrimary` to check if the current process is the primary process.
- Use `cluster.fork` to create worker processes.
- Use `http.createServer` to create the HTTP server.

---

## Exercise 5: Worker Threads with Data Processing

### Task:

1. Create a worker thread that processes a large array of numbers (e.g., sorting or filtering).
2. Send the processed data back to the main thread and log it to the console.

### Hint:

- Use the `Worker` class from the `worker_threads` module.
- Pass data to the worker thread using `workerData`.
- Use `parentPort.postMessage` to send the result back to the main thread.

---

## Exercise 6: Performance Monitoring with External Tools

### Task:

1. Use an external profiling tool (e.g., `clinic.js`) to profile a Node.js application.
2. Analyze the profiling output to identify performance bottlenecks.

### Hint:

- Install `clinic.js` and use it to profile your application.
- Analyze the output to find areas for optimization.

---

## Exercise 7: Graceful Shutdown with Database Connection

### Task:

1. Implement a graceful shutdown mechanism for a Node.js HTTP server that also closes a database connection.
2. Ensure that the server stops accepting new requests and completes ongoing requests before shutting down.

### Hint:

- Listen for termination signals (`SIGINT`, `SIGTERM`).
- Use `server.close` to stop accepting new requests.
- Close the database connection before exiting.

---

## Exercise 8: Shared Memory with Worker Threads for Matrix Multiplication

### Task:

1. Use `SharedArrayBuffer` to share a buffer between the main thread and a worker thread.
2. Implement matrix multiplication where both the main thread and the worker thread contribute to the computation.

### Hint:

- Use `SharedArrayBuffer` to create a shared buffer.
- Use `Atomics` to perform atomic operations on the shared buffer.

---

## Exercise 9: Error Handling in Child Processes

### Task:

1. Implement robust error handling in a child process created using `spawn`.
2. Ensure that errors are caught and logged in both the child process and the main thread.

### Hint:

- Use `try...catch` blocks to catch errors in the child process.
- Listen for the `error` event on the child process instance in the main thread.

---

## Exercise 10: Load Balancing with Clusters and Redis

### Task:

1. Implement a load balancer that distributes incoming HTTP requests evenly across worker processes using Redis for coordination.
2. Use the `cluster` module to create worker processes.

### Hint:

- Use Redis to keep track of the load on each worker.
- Use `cluster.workers` to access the worker processes.
- Implement a round-robin algorithm to distribute requests.
