const next = require("next");
const { createServer } = require("http");
const { parse } = require("url");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev, conf: { distDir: "build" } });
const handle = app.getRequestHandler();
const port = process.argv[2] || 4000;

exports.start = () => {
  app.prepare().then(() => {
    createServer((req, res) => {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    }).listen(port, (err) => {
      if (err) { throw err; }
      console.log(`> Ready on http://localhost:${port}`);
    });
  });
};
