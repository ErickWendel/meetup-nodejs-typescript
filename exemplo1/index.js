'use strict';
 const http = require('http');
 http.createServer((req, res) => {
     res.end('Hello!!');
 }).listen(3000, () => {
     console.log('servidor rodando!!');
 });
