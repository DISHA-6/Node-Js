const http=require('http');
//const fs=require('fs');
const userRequestHandler=require('./user');
const server=http.createServer(userRequestHandler);
const PORT=3001;
server.listen(PORT, ()=>{
  console.log(`Server running at http://localhost:${PORT}`);
});