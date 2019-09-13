const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {
    encrypt
} = require('../helpers/hash')

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is Required']
    },
    email: {
        type: String,
        required: [true, 'Email is Required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is Required'],
        minlength: [7, 'Please Insert Password Minimum 7']
    },
}, {
    timestamps: true,
    versionKey: false
})

userSchema.pre('save', function () {
    this.password = encrypt(this.password)
    next()
})
const users = mongoose.model('users', userSchema)

module.exports = users