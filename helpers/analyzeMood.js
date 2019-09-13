// Imports the Google Cloud client libraries
const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ImageAnnotatorClient({
    keyFilename: 'keyfile.json'
});

/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */
const fileName ='https://storage.cloud.google.com/whatmyage/1568181503944test3.jpeg';

client.faceDetection(fileName)
.then(result => {
    const faces = result[0].faceAnnotations;
    console.log(faces)
    console.log('Faces:');
    faces.forEach((face, i) => {
      console.log(`  Face #${i + 1}:`);
      console.log(`    Joy: ${face.joyLikelihood}`);
      console.log(`    Anger: ${face.angerLikelihood}`);
      console.log(`    Sorrow: ${face.sorrowLikelihood}`);
      console.log(`    Surprise: ${face.surpriseLikelihood}`);
    });
}).catch(err => {
    console.log(err)
})
