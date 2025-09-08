const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');


//local module
const userRouter=require('./router/userRoute');
const hostRouter=require('./router/hostRouter');
const rootDir=require('./utils/path');

const app = express();

app.use(bodyParser.urlencoded());

app.use(userRouter);
app.use(hostRouter);

app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(rootDir,'views','notfound.html'));
})

const PORT = 3000;
app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`);
});