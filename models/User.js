const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        min: 6,
        max: 26,
        required: true
    },
    email:{
        type: String,
        max: 26,
        required: true
    },
    password:{
        type: String,
        required: true,
        unique: true
    },
    profilepicture:{
        type: String,
        default: ''
    },
    coverpicture:{
        type: String,
        default: ''
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
    desc:{
        type: String,
        max:50
    },
    city:{
        type: String,
        max: 50
    }, 
    from:{
        type:String,
        max: 50
    },
    relationship:{
        type: Number,
        max: 50,
        enum: [1, 2, 3]
    },
    followers:{
        type: Array,
        default: []
    },
    following:{
        type:Array,
        defalut: []
    },
   
},
{timestamp: true}
);

module.exports = mongoose.model('User', userSchema)