var express = require('express');
var router = express.Router();
var  redis = require("../database/redis");
var registerInitialCheck = require("../middleware/registerChecks");
var register = require("../controllers/register");

/* GET home page. */
router.get('/', function(req, res, next) {
  const sess = req.session;
  sess.username = 'ankit';
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res, next) {
  console.log("Redis Value", redis.session.username);
  res.render('index', { title: 'Express' });
});



/*
@requires {email , firstName , lastName , password, confirmPassword } - req.body
@description
Security, performance and edge cases
level-1
email validate - @. should be present
password validate
level-2
JS / SQL - homework
level-3
check if email already exists
password hash
email lowercase
save
*/


router.post('/register',registerInitialCheck , register);

module.exports = router;
