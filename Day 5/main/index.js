var fs = require("fs");
fs.mkdirSync("day1")
fs.writeFileSync("day1/hello.txt", "Hello there!", (err)=>{
if(err)
console.log(err)
})

fs.readFileSync("day1/hello.txt", "utf-8")
fs.appendFileSync("day1/hello.txt", " appended")
fs.renameSync("day1/hello.txt", "day1/hellothere.txt")
fs.unlinkSync("day1/hello.txt")
fs.rmdirSync("day1")