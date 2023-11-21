const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const FormDataSchema = new mongoose.Schema({
    name : String,
    email: String,
    password: String,
    createdAt:{
        type: Date,
        default: Date.now,
      },
})

FormDataSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }
  
    this.password = await bcrypt.hash(this.password, 10);
  });
  FormDataSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  };
  
  // Return JWT token
  FormDataSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id },"nasdadaasdas", {
      expiresIn:60*60*50,
    });
  };



const FormDataModel = mongoose.model('log_reg_form', FormDataSchema);

  


module.exports = FormDataModel;
