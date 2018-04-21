var http = require('http');
var fs = require('fs');

var serve = http.createServer(function(req, resp){
  if(req.url == '/'){
    req.url = '/main.html'
  }
  console.log('request made '+ req.url);
  resp.writeHead(200, {'Content-Type': 'text/html'});
  var myReadStream = fs.createReadStream(__dirname + '/main.html', 'utf8');
  myReadStream.pipe(resp);
});

serve.listen(2050, '127.0.0.1');
console.log('listening to port 2050');
