const https = require("https");
const fs = require("fs");
const crypto = require("crypto");
const a = 146545455;
const b = 456456456;

https.get("https://dummyjson.com/products", (res) => {
  console.log(res.statusCode);
});

setTimeout(() => {
  console.log("this is settimeout");
}, 0);

const  key = crypto.pbkdf2Sync("password","salt",500,50,"sha512");
console.log(key.toString("hex"),"line 13");

crypto.pbkdf2("password","salt",50000,50,"sha512",(err,key) => {
    console.log(key.toString("hex"));
})

const data =fs.readFileSync("./Dummy.txt", "utf-8");
console.log(data,'line 16');
fs.readFile("./Dummy.txt", "utf-8", (err, data) => {
  console.log(data);
});

function multiplyFn(a, b) {
  const res = a * b;
  return res;
}

const c = multiplyFn(a, b);

console.log("Multiplication of a and b is : ", c);
