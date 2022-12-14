const request = require('supertest');
const { generateRequestAuthHeaders } = require('../pre-request');
const expect = require('chai').expect;
const order = require('../testdata/TestData.json');
const environments = require('../environments')
const {baseurl, apiAuth, versions} = environments.testnet

post_Body = JSON.parse(JSON.stringify(order));

let requestapi = {} ;
let count = 0;

describe('Zoksh OrderCreation API Tests', () => {

  let zokshkey
  let zokshts
  let zokshsign
  
  beforeEach(() => {

    console.log("BeforeEach Hook started :" + count)
    post_Body = JSON.parse(JSON.stringify(order));
    count = count + 1 ;
    //console.log("Test Flag " + count)

      requestapi = {
      url: '/v2/order',
      method: 'POST',
      body: post_Body[count - 1],
      headers: {}
  
    };

    //console.log(requestapi)

    let authHeaders = generateRequestAuthHeaders(requestapi, apiAuth, versions);
    zokshkey = authHeaders['zoksh-key'];
    zokshts = authHeaders['zoksh-ts'];
    zokshsign = authHeaders['zoksh-sign'];

  })
  
  
  it('TC-01 : Token - NA : No Specified chain or currency', (done) => {
      
    request(baseurl)
      .post(requestapi.url)
      .send(requestapi.body)
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set('zoksh-key', zokshkey)
      .set('zoksh-ts', zokshts)
      .set('zoksh-sign', zokshsign)
      .end(function (err, res) {
        if (err) {
          throw err;
        }
        expect(res.statusCode).to.be.equal(200);
        expect(res.body.orderId).to.be.not.null;
        expect(res.body.url).to.be.not.null;
        str_ordrId = res.body.orderId 
        //console.log(str_ordrId)
        expect(res.body.url).contains(str_ordrId)
        console.log(JSON.stringify(res.body));
        done();
      });
  }).timeout(10000);

  it('TC-02 : Token - NA : Prefill - All Blank : No Specified chain or currency', (done) => {
    request(baseurl)
      .post(requestapi.url)
      .send(requestapi.body)
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set('zoksh-key', zokshkey)
      .set('zoksh-ts', zokshts)
      .set('zoksh-sign', zokshsign)
      .end(function (err, res) {
        if (err) {
          throw err;
        }
        expect(res.statusCode).to.be.equal(200);
        expect(res.body.orderId).to.be.not.null;
        expect(res.body.url).to.be.not.null;
        str_ordrId = res.body.orderId 
        //console.log(str_ordrId)
        expect(res.body.url).contains(str_ordrId)
        console.log(JSON.stringify(res.body));
        done();
      });
  }).timeout(10000);

  it('TC-03 : Token - NA : Prefill - Phone, Email - Blank : No Specified chain or currency', (done) => {
    request(baseurl)
      .post(requestapi.url)
      .send(requestapi.body)
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set('zoksh-key', zokshkey)
      .set('zoksh-ts', zokshts)
      .set('zoksh-sign', zokshsign)
      .end(function (err, res) {
        if (err) {
          throw err;
        }
        expect(res.statusCode).to.be.equal(200);
        expect(res.body.orderId).to.be.not.null;
        expect(res.body.url).to.be.not.null;
        str_ordrId = res.body.orderId 
        //console.log(str_ordrId)
        expect(res.body.url).contains(str_ordrId)
        console.log(JSON.stringify(res.body));
        done();
      });
  }).timeout(10000);

  it('TC-04 : Token - NA : Prefill - Name, Email - Blank : No Specified chain or currency', (done) => {
    request(baseurl)
      .post(requestapi.url)
      .send(requestapi.body)
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set('zoksh-key', zokshkey)
      .set('zoksh-ts', zokshts)
      .set('zoksh-sign', zokshsign)
      .end(function (err, res) {
        if (err) {
          throw err;
        }
        expect(res.statusCode).to.be.equal(200);
        expect(res.body.orderId).to.be.not.null;
        expect(res.body.url).to.be.not.null;
        str_ordrId = res.body.orderId 
        //console.log(str_ordrId)
        expect(res.body.url).contains(str_ordrId)
        console.log(JSON.stringify(res.body));
        done();
      });
  }).timeout(10000);

  it('TC-05 : Name,Phone - Blank : No Specified chain or currency', (done) => {
    request(baseurl)
      .post(requestapi.url)
      .send(requestapi.body)
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set('zoksh-key', zokshkey)
      .set('zoksh-ts', zokshts)
      .set('zoksh-sign', zokshsign)
      .end(function (err, res) {
        if (err) {
          throw err;
        }
        expect(res.statusCode).to.be.equal(200);
        expect(res.body.orderId).to.be.not.null;
        expect(res.body.url).to.be.not.null;
        str_ordrId = res.body.orderId 
        val_url = res.body.url
        console.log(typeof(val_url))
        console.log(typeof(str_ordrId))
        //console.log(str_ordrId)
        expect(res.body.url).contains(str_ordrId)
        console.log(JSON.stringify(res.body));
        done();
      });
  }).timeout(10000);

  it('TC-06 : Name,Phone,Label - Blank : No Specified chain or currency', (done) => {
    request(baseurl)
      .post(requestapi.url)
      .send(requestapi.body)
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set('zoksh-key', zokshkey)
      .set('zoksh-ts', zokshts)
      .set('zoksh-sign', zokshsign)
      .end(function (err, res) {
        if (err) {
          throw err;
        }
        expect(res.statusCode).to.be.equal(200);
        expect(res.body.orderId).to.be.not.null;
        expect(res.body.url).to.be.not.null;
        str_ordrId = res.body.orderId 
        val_url = res.body.url
        console.log(typeof(val_url))
        console.log(typeof(str_ordrId))
        //console.log(str_ordrId)
        expect(res.body.url).contains(str_ordrId)
        console.log(JSON.stringify(res.body));
        done();
      });
  }).timeout(10000);

  it('TC-07 : Name,Phone,Description - Blank : No Specified chain or currency', (done) => {
    request(baseurl)
      .post(requestapi.url)
      .send(requestapi.body)
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set('zoksh-key', zokshkey)
      .set('zoksh-ts', zokshts)
      .set('zoksh-sign', zokshsign)
      .end(function (err, res) {
        if (err) {
          throw err;
        }
        expect(res.statusCode).to.be.equal(200);
        expect(res.body.orderId).to.be.not.null;
        expect(res.body.url).to.be.not.null;
        str_ordrId = res.body.orderId 
        val_url = res.body.url
        console.log(typeof(val_url))
        console.log(typeof(str_ordrId))
        //console.log(str_ordrId)
        expect(res.body.url).contains(str_ordrId)
        console.log(JSON.stringify(res.body));
        done();
      });
  }).timeout(10000);

  it('TC-08 : Name,Phone,Extra - Blank : No Specified chain or currency', (done) => {
    request(baseurl)
      .post(requestapi.url)
      .send(requestapi.body)
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set('zoksh-key', zokshkey)
      .set('zoksh-ts', zokshts)
      .set('zoksh-sign', zokshsign)
      .end(function (err, res) {
        if (err) {
          throw err;
        }
        expect(res.statusCode).to.be.equal(200);
        expect(res.body.orderId).to.be.not.null;
        expect(res.body.url).to.be.not.null;
        str_ordrId = res.body.orderId 
        val_url = res.body.url
        console.log(typeof(val_url))
        console.log(typeof(str_ordrId))
        //console.log(str_ordrId)
        expect(res.body.url).contains(str_ordrId)
        console.log(JSON.stringify(res.body));
        done();
      });
  }).timeout(10000);

  it('TC-09 : Name,Phone,OrderID - Blank : No Specified chain or currency', (done) => {
    request(baseurl)
      .post(requestapi.url)
      .send(requestapi.body)
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set('zoksh-key', zokshkey)
      .set('zoksh-ts', zokshts)
      .set('zoksh-sign', zokshsign)
      .end(function (err, res) {
        if (err) {
          throw err;
        }
        expect(res.statusCode).to.be.equal(500);
        done();
      });
  }).timeout(10000);

  it('TC-10 : Fiat - Blank : No Specified chain or currency', (done) => {
    request(baseurl)
      .post(requestapi.url)
      .send(requestapi.body)
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set('zoksh-key', zokshkey)
      .set('zoksh-ts', zokshts)
      .set('zoksh-sign', zokshsign)
      .end(function (err, res) {
        if (err) {
          throw err;
        }
        expect(res.statusCode).to.be.equal(500);
        console.log(JSON.stringify(res.body));
        done();
      });
  }).timeout(10000);

  it('TC-11 : Name, phone, email, fiat, label, desc, extra - Blank :  No Specified chain or currency', (done) => {
    request(baseurl)
      .post(requestapi.url)
      .send(requestapi.body)
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set('zoksh-key', zokshkey)
      .set('zoksh-ts', zokshts)
      .set('zoksh-sign', zokshsign)
      .end(function (err, res) {
        if (err) {
          throw err;
        }
        expect(res.statusCode).to.be.equal(500);
        done();
      });
  }).timeout(10000);

  it('TC-12 : phone, email, fiat- NA , No Specified chain or currency', (done) => {
    request(baseurl)
      .post(requestapi.url)
      .send(requestapi.body)
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set('zoksh-key', zokshkey)
      .set('zoksh-ts', zokshts)
      .set('zoksh-sign', zokshsign)
      .end(function (err, res) {
        if (err) {
          throw err;
        }
        expect(res.statusCode).to.be.equal(500);
        done();
      });
  }).timeout(10000);

  it('TC-13 : phone, email, fiat- NA , No Specified chain or currency', (done) => {
    request(baseurl)
      .post(requestapi.url)
      .send(requestapi.body)
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set('zoksh-key', zokshkey)
      .set('zoksh-ts', zokshts)
      .set('zoksh-sign', zokshsign)
      .end(function (err, res) {
        if (err) {
          throw err;
        }
        expect(res.statusCode).to.be.equal(500);
        done();
      });
  }).timeout(10000);



});

