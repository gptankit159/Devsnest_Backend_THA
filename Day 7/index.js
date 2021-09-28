const express = require("express");

const app = express();
// const fun = (req,res)=>{
//     res.send("Hello");
// }
// app.get("/", fun );
// app.put("/", fun );
// app.post("/", fun );
// app.delete("/", fun );


app.get("/", (req,res)=>{
    res.send("Hello");
    res.sendStatus(200);
})

app.listen(5000);