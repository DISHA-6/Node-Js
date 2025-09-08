//Adding middleware
const express=require('express');
const userRequestHandler=require('./user');
const app=express();
app.use('/',(req,res,next)=>{
  console.log("Came in first middleware",req.url,req.method);
  next();//res.send()implicitly call res.end()
});

app.use('/submit-details',(req,res,next)=>{
  console.log("Came in second middleware",req.url,req.method);
  res.send("<p>Response from third middleware</p>");
});

const PORT=3002;
app.listen(PORT, ()=>{
  console.log(`Server running at http://localhost:${PORT}`);
});