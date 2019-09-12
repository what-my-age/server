const mongoose = require('mongoose')
const Schema = mongoose.Schema

const photoSchema = new Schema({
    tags: [],
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    UserId: { type: Schema.ObjectId, ref: 'users' }
},{
    timestamps: true,
    versionKey: false
})

const photos = mongoose.model('photos', photoSchema)

module.exports = photos