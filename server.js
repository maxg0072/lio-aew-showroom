const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer((req, res) => {
  let url = req.url === '/' ? '/index.html' : decodeURIComponent(req.url.split('?')[0]);
  const filePath = path.join(__dirname, url);
  const ext = path.extname(filePath);
  const mime = { '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css', '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg' }[ext] || 'application/octet-stream';
  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    res.writeHead(200, { 'Content-Type': mime + '; charset=utf-8' });
    res.end(data);
  });
});
server.listen(8090, () => console.log('Running on http://localhost:8090\n  Wer wird Procurement-Millionär: http://localhost:8090/\n  Spend Control: http://localhost:8090/spend-control.html\n  Procurement Rush: http://localhost:8090/procurement-rush.html\n  Tower Defense: http://localhost:8090/tower-defense.html\n  Arcade Shooter: http://localhost:8090/arcade-shooter.html'));
