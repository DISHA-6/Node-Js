const http=require('http');
const sum=require('./calculator');
const server=http.createServer(sum);
const PORT=3001;
server.listen(PORT,()=>{
  console.log(`Server running at http://localhost:${PORT}`);
})