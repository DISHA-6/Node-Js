const sumRequestHandler=require('./calculator-result');
const Sum=(req,res)=>{
  if(req.url==='/'){
    res.write(
      `<html lang="en">
      <head><title>Home Page</title></head>
      <body>
      <h1>Welcome to Home Page</h1>
      <a href="/calculator">Go to Calculator</a>
      </body>
      </html>`
    );
    return res.end();
  }
  else if(req.url.toLowerCase() ==='/calculator'){
    res.write(
      `<html lang="en">
      <head><title>Calculator</title></head>
      <body>
      <h1>Calculator</h1>
      <form action="/calculator-result" method="POST">
      <input type="number" name="num1" placeholder="Enter first number" required><br><br>
      <input type="number" name="num2" placeholder="Enter second number" required><br><br>
      <button type="submit">Calculate Sum</button>
      </form>
      </body>
      </html>`
    );
    return res.end();
  }
  else if(req.url.toLowerCase() ==='/calculator-result' && req.method==='POST'){
    return sumRequestHandler(req,res);
    
  }
res.setHeader('Content-Type','text/html');
res.write(
  `<html lang="en">
  <head><title>Not Found</title></head>
  <body>
  <h1>404 Page Not Found</h1>
  <a href="/">Go to Home Page</a>
  </body>
  </html>`
);
return res.end();
}

module.exports=Sum;