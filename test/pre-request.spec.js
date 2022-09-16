
const crypto = require('crypto');
const request = require('supertest');
const expect = require('chai').expect;
const order = require('../testdata/order.json');

// module.exports.generateRequestAuthHeaders = generateRequestAuthHeaders;

// describe('Zoksh OrderCreation API Tests', () => {

const baseurl = 'https://payments.testnet.zoksh.com';
const requestapi = {
  url: 'https://payments.testnet.zoksh.com/v2/order',
  method: 'POST',
  body: require('../testdata/order.json'),
  headers: {},
};
const apiAuth = {
  key: '627b4a2836b59026e4d5cd6c',
  secret: 'sk_test_EM+cYhQ50tBO31PAVEifGw=='
}
const versions = {
  versionTwo: 'v1',
  versionOne: 'v2'
}

var authHeaders = generateRequestAuthHeaders(requestapi, apiAuth, versions);
//? request.headers = {...request.headers, ...authHeaders}
var zokshkey = authHeaders['zoksh-key'];
var zokshts = authHeaders['zoksh-ts'];
var zokshsign = authHeaders['zoksh-sign'];


it('Should successfully create a order', (done) => {

  request(baseurl)
    .post('/v2/order')
    //.get('/?order=62c764a3eed0eefdac0041b8?debug=true')
    .send(order)
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .set('zoksh-key', zokshkey)
    .set('zoksh-ts', zokshts)
    .set('zoksh-sign', zokshsign)
    .end(function (err, res) {
      expect(res.statusCode).to.be.equal(200);
      // expect(res.body.bookingid).not.to.be.null;
      // expect(res.body.booking.firstname).to.be.equal(booking.firstname);
      // expect(res.body.booking.lastname).to.be.equal(booking.lastname);
      // expect(res.body.booking.totalprice).to.be.equal(booking.totalprice);
      // expect(res.body.booking.depositpaid).to.be.equal(booking.depositpaid);
      // expect(res.body.booking.bookingdates.checkin).to.be.equal(booking.bookingdates.checkin);
      // expect(res.body.booking.bookingdates.checkout).to.be.equal(booking.bookingdates.checkout);
      // expect(res.body.booking.additionalneeds).to.be.equal(booking.additionalneeds);
      // bookingId = res.body.bookingid;
      console.log(res);
      if (err) {
        throw err;
      }
      done();

    });
});

// });



function generateRequestAuthHeaders(requestapi, apiAuth, versions) {
  // TODO FIXME cover other methds as well
  //const postBodyJson = undefined;
  if (requestapi.method === 'POST' || requestapi.method === 'PUT') {
    var postBodyJson = JSON.stringify(requestapi.body);
  }

  const timestamp = new Date().getTime().toString();
  const headers = {};

  console.log("TEST CONSOLE");


  let requestPath = requestapi.url;

  requestPath = requestPath.replace('{{', '').replace('}}', '').replace('/api', '').trim();

  const toSignBody = `${timestamp}${requestPath}${postBodyJson}`;
  const hmac = crypto.createHmac('sha256', apiAuth.secret);
  const signature = hmac.update(toSignBody).digest('hex');

  headers['zoksh-key'] = apiAuth.key
  headers['zoksh-ts'] = timestamp;
  headers['zoksh-sign'] = signature;

  return headers;
}