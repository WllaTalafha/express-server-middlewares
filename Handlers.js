'use strict';

function handleMain(req, res){
    res.send('hello ♥');
}

function handleSquare(req, res){
    const result={num:req.squared}
    res.json(result);    
}

function handleError(req, res){
    res.send('error 404 not exist');
}

module.exports = {handleMain,handleSquare,handleError};