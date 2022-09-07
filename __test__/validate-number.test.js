'use strict';

const {checker} = require('../middlewares/validate-number');

describe('Testing checker Middleware',()=>{

    let spy ;
    let res = {};
    let req = {query:{num:'5'}};
    let next = jest.fn();
    
    beforeEach(()=>{
        spy = jest.spyOn(console,'log').mockImplementation();
    });

    afterEach(()=>{
        spy.mockRestore();
    })

    it('Test checker console.log',()=>{

        checker(req,res,next);
        expect(spy).toHaveBeenCalled();
    });

    it('Test checker next',()=>{

        checker(req,res,next);
        expect(next).toHaveBeenCalled();
    });


})