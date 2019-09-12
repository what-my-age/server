'use strict';

const request = require('request');

let subscriptionKey = '4ccab3e016854640871a9e68e3bfef29';
let endpoint = 'https://captionme.cognitiveservices.azure.com/'
if (!subscriptionKey) { throw new Error('Set your environment variables for your subscription key and endpoint.'); }

var uriBase = endpoint + 'vision/v2.0/analyze';

const imageUrl =
    'https://storage.cloud.google.com/whatmyage/1568036797847test3.jpeg';

const params = {
    'visualFeatures': 'Categories,Description,Color',
    'details': '',
    'language': 'en'
};
const options = {
    uri: uriBase,
    qs: params,
    body: '{"url": ' + '"' + imageUrl + '"}',
    headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key' : subscriptionKey
    }
};

request.post(options, (error, response, body) => {
  if (error) {
    console.log('Error: ', error);
    return;
  }
  let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
  console.log('JSON Response\n');
  console.log(jsonResponse);
});