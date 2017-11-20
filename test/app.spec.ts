
import app from './../app';
import server from './../bin/www';
const request=require('supertest')(app);

import { expect,should } from 'chai';


describe('#Numeros', () => {
      afterEach(function () {
        server.close();
      });

      it('1+1=2', (cb) => {
        expect(2).to.be.eq(2);
        cb()
      });

      it('Con promise',() => {
        return request
        .get('/data')
        .expect(404)
      });
      it('Testeando users',() => {
        return request
        .get('/users')
        .expect(404)
      });

});
