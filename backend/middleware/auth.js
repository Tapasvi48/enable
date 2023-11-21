const FormDataModel=require("../models/FormData");
const jwt = require("jsonwebtoken");
exports.isAuthenticatedUser = async (req, res) => {
    const { token } = req.cookies;
  
    if (!token) {
      return res.status(401).json({success:false,message:"please login first"});
    }
  
    const decoded = jwt.verify(token,"nasdadaasdas");
    req.user = await FormDataModel.findById(decoded.id);
    next();
  };
  