const mongoose = require('mongoose')
const Schema = mongoose.Schema

const photoSchema = new Schema({
    tags: [],
    image: {
        type: String,
        required: true
    },
    captions: {
        type: String,
        required: true
    },
    UserId: { type: Schema.ObjectId, ref: 'users' },
    gender:{
        type: String,
        required:true
    },
    age:{
        type: Number,
        required: true
    }
},{
    timestamps: true,
    versionKey: false
})

const photos = mongoose.model('photos', photoSchema)

module.exports = photos