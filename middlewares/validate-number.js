'use strict';

function checker (req,res,next){
        const{num}=req.query;
        const rgx= /\b[0-9]*\b/g;
        const rgxNum = num.match(rgx)[0];          
        
        if(rgxNum){
            let number = parseInt(rgxNum);
            req.squared = number*number;
            next();
        }
        else{
        next('error 500 please enter a num');
        }
 }

module.exports={checker};