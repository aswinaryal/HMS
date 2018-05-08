const http = require('http'),
      app  =  require('./app'),
      port = process.env.PORT || 4000;

const server = http.createServer(app);

server.listen(port,()=>console.log('server started at port: '+port));