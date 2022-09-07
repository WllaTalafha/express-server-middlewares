'use strict';

const {app} = require('../server');

const supertest = require('supertest');

const request = supertest(app); 

describe ('testing API server',()=>{
    it('testing main route',async()=>{
        const response = await request.get('/');
        expect(response.text).toEqual('hello ♥');
        
    })
    it('testing /square route', async()=>{
        const response = await request.get('/square');
        expect(typeof response.body).toEqual('object');
    })
})