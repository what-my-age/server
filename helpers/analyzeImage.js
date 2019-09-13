const cognitiveServices = require('cognitive-services');
const fs = require('fs')

const parameters = {
    'visualFeatures': 'Description',
    'language': 'en'
};
 
const body = 'https://storage.cloud.google.com/whatmyage/1568036883256test3.jpeg'
const headers = { "content-type": "application/json" };
 
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