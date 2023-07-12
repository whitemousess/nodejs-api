const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String },
    status: { type: String }
},{
    timestamps: true
})


module.exports = mongoose.model("Items", schema);