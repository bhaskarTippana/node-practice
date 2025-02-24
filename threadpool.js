const crypto = require("crypto");
process.env.UV_THREADPOOL_SIZE = 2

crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key) => {
    console.log('key 0 '+key.toString("hex"));
})

crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key) => {
    console.log('key 1 '+key.toString("hex"));
})

crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key) => {
    console.log('key 2 '+key.toString("hex"));
})

crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key) => {
    console.log('key 3 '+key.toString("hex"));
})

crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key) => {
    console.log('key 4 '+key.toString("hex"));
})