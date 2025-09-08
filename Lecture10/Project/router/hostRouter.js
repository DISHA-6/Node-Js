const path = require("path");//core module
const express = require("express");
const hostRouter = express.Router();
const rootDir=require('../utils/path');
const bodyParser = require("body-parser");

hostRouter.use(bodyParser.urlencoded());

hostRouter.get("/add-home", (req, res) => {
   //console.log(req.url,req.method);
   res.sendFile(path.join(rootDir,'views','addHome.html'));
  });

hostRouter.post("/add-home",(req,res)=>{
    console.log(req.body);
    res.sendFile(path.join(rootDir,'views','homeAdded.html'));
    
  });

module.exports = hostRouter;
