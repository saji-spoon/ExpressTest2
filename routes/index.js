var express = require('express');
var fs = require('fs');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Ayas' });
});


router.get('/angular', function(req, res) {
  res.render('angularJade');
});


//readFileのパスはapp.jsから
/* HTMLを読み込む場合のソース
router.get('/angular', function(req, res) {
	fs.readFile('./views/angular.html', {encoding:"utf-8"}, function(err, data) {
			if(!data)
			{
				console.log("error.");
				res.end();
				return;
			}
		
            res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
            res.write(data);
            res.end();		
	})

})
*/


module.exports = router;
