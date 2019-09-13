'use strict';

const request = require('request');

let subscriptionKey = '4ccab3e016854640871a9e68e3bfef29';
let endpoint = 'https://captionme.cognitiveservices.azure.com/'
if (!subscriptionKey) { throw new Error('Set your environment variables for your subscription key and endpoint.'); }

var uriBase = endpoint + 'vision/v2.0/analyze';


function analyze(req,res,next){
  const imageUrl = req.file.cloudStoragePublicUrl
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
    next(error)
    return;
  }
  // console.log(body)
  let jsonResponse = JSON.parse(body)
  let captions = jsonResponse.description.captions[0].text
  req.captions = captions
  next()
});
}

module.exports = analyze