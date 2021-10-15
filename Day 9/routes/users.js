var express = require('express');
var router = express.Router();
const path = require('path');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  
});
router.get('/file/:name', function(req,res, next){
  // res.send('respond with a resource');
  // console.log(../images/,req.params.name);
  // let pathh = path.dirname(path.basename(__dirname));
  console.log("hello");
  console.log(__dirname);
  console.log(path.resolve('./'));
  // console.log(path.join('/public/images', req.params.name ));
  // var rootf = "public";
  // console.log(rootf);
  console.log(path.dirname(path.basename(__dirname)));
  res.sendFile(path.join(path.resolve('./'), '/public/images', req.params.name ))
})

module.exports = router;
