const express=require('express');
//parsing the body of the incoming request
const bodyParser=require('body-parser');

const app=express();
app.use((req,res,next)=>{
  console.log("First Dummy Middleware",req.url,req.method);
  next();
});

app.use((req,res,next)=>{
  console.log("Second Dummy Middleware",req.url,req.method);
  next();

});

// app.use((req,res,next)=>{
//   console.log("Third Dummy Middleware",req.url,req.method);
//   res.send("<h1>Response from the server</h1>");
// })

app.get('/',(req,res,next)=>{
 console.log("Handling / for GET",req.url,req.method);
 res.send("<h1>Hello from Server</h1>");
})

app.get('/contactUs',(req,res,next)=>{
  console.log("Contact Us page handling",req.url,req.method);
  res.send(`
  <h1>Please give your details:</h1>
  <form actions="/contactUs" method=POST>
  <input type="text" name="name" placeholder="Enter your name:"/>
  <input type="email" name="email" placeholder="Enter your email:"/><br>
  <button type="submit">Submit</button>
  </form>
  `);
});

app.use(bodyParser.urlencoded());

app.post('/contactUs',(req,res,next)=>{
  console.log("Contact Us page handling",req.url,req.method,req.body);
  res.send("<h1>Thanks for submitting your details. We will get back to you soon!</h1>");
});

const PORT=3002;
app.listen(PORT,()=>{
  console.log(`Server running on address http://localhost:${PORT}`);
})