const cognitiveServices = require('cognitive-services');
const fs = require('fs')

const parameters = {
    'visualFeatures': 'Description',
    'language': 'en'
};
 
const body = fs.readFileSync('serverrr.jpeg')
const headers = { "content-type": "application/octet-stream" };
 
const checkImage = new cognitiveServices.computerVision({
    apiKey: "4ccab3e016854640871a9e68e3bfef29",
    endpoint: "southeastasia.api.cognitive.microsoft.com"
})
 
checkImage.analyzeImage({
    parameters,
    body,
    headers
}).then(response => {
    console.log(response);
}).catch(error => {
    console.log(error)
})