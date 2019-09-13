const captionbot = require('node-captionbot');

captionbot('http://imgur.com/B7a15F5.jpg')
.then(caption => {
    console.log(caption)
}).catch(err => {
    console.log(err)
})