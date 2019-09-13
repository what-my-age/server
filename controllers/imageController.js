const photo = require('../models/photo')
const axios = require('axios')

class imageController {

    static getMyAge(req, res, next) {
        let labels = req.labels
        let {
            id
        } = req.decode
        let tags = []
        let captions = req.captions
        let myPhoto = {}
        let image = req.file.cloudStoragePublicUrl
        for (let i = 0; i < labels.length; i++) {
            tags.push(labels[i].description)
        }
        axios({
            method: 'POST',
            url: 'https://www.moderatecontent.com/api/v2?face=true&key=31a593f0d59dba75e0740f935eec4067&url=' + image
        }).then(({
            data
        }) => {
            let age = data.faces[0].age
            let gender = data.faces[0].gender
            myPhoto.age = age
            myPhoto.gender = gender
            myPhoto.tags = tags
            myPhoto.captions = captions
            return photo.create({
                tags,
                image,
                UserId: id,
                captions,
                gender,
                age
            }).then(data1 => {
                res.json({
                    data1
                })
            }).catch(next)
        }).catch(next)
    }

    static delete(req, res, next) {
        let {
            id
        } = req.params
        photo.findByIdAndDelete(id)
            .then(data => {
                res.json({
                    data
                })
            }).catch(next)
    }

    static getAll(req,res,next){
        let {id} = req.decode
        photo.find({UserId: id}).sort({createdAt:-1})
        .then(data => {
            res.json({data})
        }).catch(next)
    }
}

module.exports = imageController