'use strict';

const express = require('express');
const app=express();
const cors = require ('cors');
const {handleMain,handleSquare,handleError}=require('./Handlers');
const {checker}=require('./middlewares/validate-number');
const {errorHandler}=require('./error-handlers/500');

app.use(express.json());
app.use(cors());

app.get('/',handleMain);
app.get('/square',checker,handleSquare);



function start (port){
    app.listen(port,()=>console.log(`server is running on port ${port}`))
}

app.use(errorHandler);
app.get('*',handleError);

module.exports={app,start}