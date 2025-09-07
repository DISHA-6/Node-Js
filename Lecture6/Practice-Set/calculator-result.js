//Async Code

const sumRequestHandler=(req,res)=>{
 console.log("In Sum Request Handler",req.url);
 const body=[];
 let result;
 req.on('data',chunk =>body.push(chunk));
 req.on('end',()=>{
  const bodyStr=Buffer.concat(body).toString();
  const params=new URLSearchParams(bodyStr);
  const bodyObj=Object.fromEntries(params);
  console.log(bodyObj);
  result=Number(bodyObj.num1 )+ Number(bodyObj.num2);
  console.log(result);
  
 });
  res.setHeader('Content-Type','text/html');
  res.write(`
    <html lang="en">
    <head><title>Calculator Result</title></head>
    <body>
    <h1>Sum :${result}</h1>
    </body>
    </html>
  `);
  return res.end();
}
module.exports=sumRequestHandler;
