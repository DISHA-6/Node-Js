const http=require('http');
const fs=require('fs');

/*function requstListener(req,res){
  console.log(req);
}
http.createServer(requstListener);*/
const server=http.createServer((req,res)=>{
  // console.log(req);
  // process.exit();
  console.log(req.url,req.method,req.headers);
  if(req.url ==='/'){
    // res.setHeader('Content-Type','text/html');
    // res.write('<html>');
    // res.write('<head><title>My First Page</title></head>');
    // res.write('<body><h1>Welcome to Home!</h1></body>');
    // res.write('</html>');
    // return res.end();
    
    //POST request handling // taking input from user
    res.setHeader('Content-Type','text/html');
    res.write('<h1>Welcome to the Home Page!</h1>');
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" id="name" name="name" placeholder="Enter your name"><br><br>');
    res.write('<label for="gender">Gender:</label>');
    res.write('<input type="radio" id="male" name="gender" value="male">');
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="female" name="gender" value="female">');
    res.write('<label for="female">Female</label>');
    res.write('<br><button type="submit">Submit</button>');
    res.write('</form>');
    return res.end();//to end response
  }
  else if(req.url==='/products'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Welcome to products page!</h1></body>');
    res.write('</html>');
    return res.end();
  }else if(req.url==='/submit-details' && req.method==='POST'){
    fs.writeFileSync('user.txt','Dummy');
    res.statusCode=302;//redirection code
    res.setHeader('Location','/');
    return res.end();
  }
  
  res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Hello</h1></body>');
  res.write('</html>');
  res.end();//to end response
});
//server.listen(3000);
const PORT=3000;
server.listen(PORT, ()=>{
  console.log(`Server running at http://localhost:${PORT}`);
});