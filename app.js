var express = require('express');
var path = require('path'); 
var app = express();
var server = require('http').createServer(app);

var bodyParser= require('body-parser');



app.use(bodyParser.urlencoded({
  extended: true
}));
    
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));
//app.set('view', path.join(__dirname, 'view'));








app.get('/', function (req,res)
{	
	res.sendFile(__dirname + '/public/view/index.html');

});
/*
app.get('/sihirlibalik', function (req,res)
{   
    res.sendFile(__dirname + '/public/view/sb.html');
  
});

app.get('/yasayanfosil', function (req,res)
{   
    res.sendFile(__dirname + '/public/view/yf.html');
});

app.get('/wowpaw', function (req,res)
{   
    res.sendFile(__dirname + '/public/view/wowpaw.html');
});

app.get('/snowhite', function (req,res)
{   
    res.sendFile(__dirname + '/public/view/snowhite.html');
});
*/

app.get('*', function (req,res)
{   
    res.sendFile(__dirname + '/public/view/index.html');
});







server.listen(process.env.PORT || 8081);
console.log('Listening on MagicPort 8080');