const express = require("express");

const app = express();

const bodyParser = require("body-parser");


const checkAdmin= (req,res,next) => {
    console.log("in first");
    if(req.query.admin === 'true'){
        next()
    }else{
        res.status(400).send("Should be admin");
    }
    // res.status(200);
    // next();
}


app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(checkAdmin);


const sendRes = (req,res) => {
    console.log("in Second");
    res.status(200);
    res.json(req.query);
};

app.get('/',sendRes );

app.post('/', (req,res)=>{
    console.log('req.body -> ', req.body);
    res.status(200);
    res.json(req.body);
})


app.listen(5000);