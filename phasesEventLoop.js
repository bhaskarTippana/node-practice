const fs = require("node:fs");
setImmediate(() => console.log("setImmediate"));
setTimeout(() => console.log("setTimeout"), 100);
process.nextTick(() => console.log("nextTick"));
const promise = new Promise((res, rej) => console.log("promise"));

fs.readFile("./Dummy.txt", "utf-8", () => console.log("fs"));
process.nextTick(() => console.log("2nd nextTick"));