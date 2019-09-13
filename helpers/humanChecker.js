const vision = require('@google-cloud/vision');

function humanChecker(req,res,next){
// Imports the Google Cloud client library

// Creates a client
const client = new vision.ImageAnnotatorClient({
    keyFilename: 'keyfile.json'
});

/**
 * TODO(developer): Uncomment the following line before running the sample.
 */
const fileName = req.file.buffer

client
.labelDetection(fileName)
.then(results => {
    const labels = results[0].labelAnnotations;
    let flag = false
    let words = ['Human','Gentleman','Women','Woman','Man','Men','Businessperson','Person','Face','Head','Smile','Student','Footwear','Beauty','Hair','Chin','Ear','Lip','Neck']
    for(let i = 0; i < labels.length;i++){
        for(let j = 0; j < words.length;j++){
            if(labels[i].description == words[j]){
                flag = true
            }
        }
    }
    req.labels = labels
    if(flag){
        next()
    }else{
        next({httpStatus: 400, message: 'Sorry please upload human photo'})
    }
}).catch(next)


}


module.exports = humanChecker