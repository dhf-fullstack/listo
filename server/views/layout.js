const html = require('html-template-tag')

module.exports = (content) => html`<!DOCTYPE html>
  <html lang="en">
    <head>
      <title>List-O!</title>
      <link rel="stylesheet" href="/style.css">
    </head>
    <body>
      <div id="header">
      <div id="logo">
        It's List-O!
      </div>
      </div>
      $${content}
      <div id="footer" class="container text-muted">
        List-O! by David H. Friedman at Fullstack Academy
      </div>
    </body>
  </html>
`