// const request = require('supertest');
// const { generateRequestAuthHeaders } = require('../pre-request');
// const expect = require('chai').expect;
// const order = require('../testdata/TC01.json');
// const environments = require('../environments')
// const {baseurl, apiAuth, versions} = environments.testnet

// //StrpostBody = JSON.parse(JSON.stringify(order));

// const requestapi = {

//   url: '/v2/order',
//   method: 'POST',
//   body: require('../testdata/TC01.json'),
//   headers: {},

// };

// describe('Zoksh OrderCreation API Tests', () => {

//   let zokshkey
//   let zokshts
//   let zokshsign
  
//   before(() => {
//     let authHeaders = generateRequestAuthHeaders(requestapi, apiAuth, versions);
//     //? request.headers = {...request.headers, ...authHeaders}
//     zokshkey = authHeaders['zoksh-key'];
//     zokshts = authHeaders['zoksh-ts'];
//     zokshsign = authHeaders['zoksh-sign'];
//   })
  
  
//   it('TC-01 : Token - NA : No Specified chain or currency : Should successfully create a order', (done) => {
    
//     request(baseurl)
//       .post(requestapi.url)
//       //.get('/?order=62c764a3eed0eefdac0041b8?debug=true')
//       .send(order)
//       .set('Accept', 'application/json')
//       .set('Content-Type', 'application/json')
//       .set('zoksh-key', zokshkey)
//       .set('zoksh-ts', zokshts)
//       .set('zoksh-sign', zokshsign)
//       .end(function (err, res) {
//         if (err) {
//           throw err;
//         }
//         expect(res.statusCode).to.be.equal(200);
//         expect(res.body.orderId).to.be.not.null;
//         expect(res.body.url).to.be.not.null;
//         str_ordrId = res.body.orderId 
//         console.log(str_ordrId)
//         expect(res.body.url).contains(str_ordrId)
//         console.log(JSON.stringify(res.body));
//         done();
//       });
//   }).timeout(10000);

  
// });