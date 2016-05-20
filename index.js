var express = require('express'),
	reload = require('reload'),
	http = require('http'),
	jade = require('jade');
var app = express();

app.get('/',function(request,response){
	var fn = jade.compileFile('html/index.jade', {});

	response.send(fn({user:"Vasil"}));
});
app.use(express.static('html'));
app.set('port', 80)

var server = http.createServer(app);

//reload code here 
//optional reload delay and wait argument can be given to reload, refer to [API](https://github.com/jprichardson/reload#api) below 
reload(server, app);
 
server.listen(app.get('port'), function(){
  console.log("Web server listening on port " + app.get('port'));
});