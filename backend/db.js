const { default: mongoose } = require("mongoose");
// const mongoose = require("mongoose");
//mongodb+srv://kushal:<db_password>@cluster0.0ignc.mongodb.net/
mongoose.connect("mongodb+srv://kushal:ud5Tc3tyRuh38Pm@cluster0.0ignc.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const  todo = mongoose.model('todos',todoSchema);
module.exports = {
    todo
}