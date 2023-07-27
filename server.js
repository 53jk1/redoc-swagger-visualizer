const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/docs', serveStatic(path.join(__dirname, 'docs')));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
