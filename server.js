var http = require('http');
var fs = require('fs');
var path = require('path');
var myReadStream;
var image;

var serve = http.createServer(function(req, resp){
  console.log('request made '+ req.url);
  if(req.url == '/'){
    req.url = '/main.html';
  }
    if(!fs.existsSync(__dirname + req.url)){
      req.url = '/notfound.html';
    }
    if(path.extname(req.url) == '.html'){
      myReadStream = fs.createReadStream(__dirname + req.url, 'utf8');
      resp.writeHead(200, {'Content-Type': 'text/html'});
    }
    if(path.extname(req.url) == '.jpg' || path.extname(req.url) == '.png'){
      image = fs.readFileSync(__dirname + req.url);
      resp.writeHead(200, {'Content-Type': 'image/gif'});
      resp.end(image, 'binary');
    }
    myReadStream.pipe(resp);



});

serve.listen(2050, '127.0.0.1');
console.log('listening to port 2050');
