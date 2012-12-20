var http = require('http');
var sys = require('sys')
var exec = require('child_process').exec;
function puts(error, stdout, stderr) { sys.puts(stdout) }

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  exec("cd /var/www/TDv3 && git checkout -- . && git fetch && git pull --rebase >> ~/gitauto.log", puts);
  // execution PHPUnit
  exec("cd /var/www/TDv3/tests && phpunit >> ~/phpunit.log", puts);
  res.end('GitHub hook\n');
}).listen(20081);
console.log('Server running at http://127.0.0.1:20081/');
