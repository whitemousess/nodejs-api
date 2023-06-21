const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
    id: String,
    name: String,
    status: String
},{
    timestamps: true
})


module.exports = mongoose.model("Items", schema);