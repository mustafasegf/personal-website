import { join } from 'path';

const publicDir = join(process.cwd(), 'dist');
const port = 3000 || process.env.PORT

Bun.serve({
  port: port,
  async fetch(req) {
    const url = new URL(req.url);

    let filePath = join(publicDir, url.pathname);

    if (url.pathname === '/') {
      filePath = join(publicDir, 'index.html');
    }

    const file = Bun.file(filePath);

    if (await file.exists()) {
      return new Response(file);
    }

    return new Response('Not Found', { status: 404 });
  },
});

console.log(`Bun server listening on port ${port}`);

