const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
  console.log(req.url,req.method);
  if(req.url ==='/home'){
    res.write('<h1>Welcome to Home Page</h1>');
    return res.end();
  } else if(req.url==='/men'){
    res.write('<h1>Welcome to Men Section</h1>');
    return res.end();
  } else if(req.url==='/women'){
    res.write('<h1>Welcom to women Section</h1>');
    return res.end();
  } else if(req.url==='/kids'){
    res.write('<h1>Welcome to Kids Section</h1>');
    return res.end();
  } else if(req.url==='/cart'){
    res.write('<h1>Welcome to Cart Page</h1>');
    return res.end();
  }
  //default url
  res.write(`
      <html lang="en">
        <head><title>Myntra Page</title></head>
        <body>
          <h1>Welcome to Myntra</h1>
          <head>
            <nav>
              <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/men">Men</a></li>
                <li><a href="/women">Women</a></li>
                <li><a href="/kids">Kids</a></li>
                <li><a href="/cart">Cart</a></li>
              </ul>
            </nav>
          </head>
        </body>
      </html>
    `);
    return res.end();
    
  
})
server.listen(3001,()=>{
  console.log('Server is running on http://localhost:3001');
});