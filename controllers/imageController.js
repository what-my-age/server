const photo = require('../models/photo')

class imageController {
    static getMyAge(req, res, next) {
        let labels = req.labels
        let {id} = req.decode
        let tags = []
        let {title} = req.body
        let image = req.file.cloudStoragePublicUrl
        for(let i = 0; i<labels.length;i++){
            tags.push(labels[i].description)
        }
        photo.create({
            tags,
            image,
            UserId: id,
            title
        }).then(data => {
            res.json({data})
        }).catch(next)


    }
}

module.exports = imageController