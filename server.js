// 로컬 개발용 정적 파일 서버 (외부 패키지 없이 Node.js 기본 모듈만 사용)
// 실행: npm start  →  http://localhost:3000
// Vercel 배포 시에는 이 파일을 쓰지 않고 public/ 폴더만 정적으로 배포됩니다.

const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const PORT = Number(process.env.PORT) || 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
};

function send(res, status, body, type = 'text/plain; charset=utf-8') {
  res.writeHead(status, { 'Content-Type': type });
  res.end(body);
}

const server = http.createServer((req, res) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    return send(res, 405, '405 Method Not Allowed');
  }

  let pathname;
  try {
    pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  } catch {
    return send(res, 400, '400 Bad Request');
  }

  // public/ 바깥 파일에 접근하지 못하도록 경로 검사
  let filePath = path.join(PUBLIC_DIR, pathname);
  if (filePath !== PUBLIC_DIR && !filePath.startsWith(PUBLIC_DIR + path.sep)) {
    return send(res, 403, '403 Forbidden');
  }

  fs.stat(filePath, (err, stats) => {
    // 폴더 요청이면 그 안의 index.html 제공 (예: / → /index.html)
    if (!err && stats.isDirectory()) filePath = path.join(filePath, 'index.html');

    fs.readFile(filePath, (readErr, data) => {
      if (readErr) {
        return send(res, 404, '404 Not Found');
      }
      const type = MIME_TYPES[path.extname(filePath).toLowerCase()] || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': type, 'Cache-Control': 'no-cache' });
      res.end(req.method === 'HEAD' ? undefined : data);
    });
  });
});

server.listen(PORT, () => {
  console.log(`로컬 서버 실행 중: http://localhost:${PORT}`);
  console.log('종료하려면 Ctrl + C 를 누르세요.');
});
