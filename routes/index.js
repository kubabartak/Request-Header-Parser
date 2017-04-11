var express = require('express');
var router = express.Router();
var ip = require('ip');
var os = require('os');

/* GET home page. */
router.get('/', function(req, res) {
    var software = os.type() + " "+ os.release().split('.')[0]+"."+os.release().split('.')[1];
    var address= req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;
    
  var languages= req.headers["accept-language"];
    var language=languages.split(',')[0];
    
    data={ IP: address,
        language: language,
        software:  software 
         };

  res.json(data);
});

module.exports = router;
