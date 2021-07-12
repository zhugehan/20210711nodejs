const fs = require('fs');
const ws = fs.createWriteStream('./home.js');
ws.write('<html>');
ws.write(`
    <head>
        <title>这是一个充满回忆的文件</title>
    </head>
    <body>
        <h1>哎呦，不错哦！</h1>
    </body>
`)
ws.write('</html>');
ws.close();
