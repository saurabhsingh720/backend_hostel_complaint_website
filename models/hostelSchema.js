const moongose = require("mongoose");

const hostelSchema = new moongose.Schema({
    name: {
        type: String,
        requried: true,
    },
    email: {
        type: String,
        requried: true,
    },
    branch: {
        type: String,
        requried: false,
    },
    room: {
        type: Number,
        requried: true,
    },
    issue: {
        type: String,
        // required: true
    }
});

const userIssue = moongose.model("userIssue", hostelSchema);

module.exports = {userIssue};