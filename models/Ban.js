const mongoose = require("mongoose");

const schema =  mongoose.Schema({
    phone : {
        type : String,
        required : true
    }
})

const model = mongoose.model("Ban" , schema);

module.exports = model