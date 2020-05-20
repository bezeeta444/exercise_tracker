const Mongoose = require ('mongoose');

const Schema = Mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
},{
    timestamps: true,
});

const Exercise = Mongoose.model('Exercise' , userSchema);

module.exports = Exercise;