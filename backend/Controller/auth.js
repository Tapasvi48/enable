const FormDataModel=require("../models/FormData")
const jwt = require("jsonwebtoken");
exports.registerUser =async (req, res, next) => {

    const { name, email, password } = req.body;

const newUser=await FormDataModel.create({
name,email,password


})
const token = newUser.getJwtToken();

// Options for cookie
const options = {
    expires: new Date(
        Date.now() + 20 * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
};

return res.status(200).cookie("token", token, options).json({
    success: true,
    message:"succesfully registered user",
    token,
    newUser,
});};
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    // Checks if email and password is entered by user
    if (!email || !password) {
        return res.status(400).json(
         {
            success:false,
            message:"either email or password missing"
         })

    }

    // Finding user in database
    const user = await FormDataModel.findOne({ email });

    if (!user) {
        return res.status(401).json({
success:false,
message:"either password and user incorrect"
        })
    }


    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
        return res.status(401).json({success:false,
            message:"incorrect password"})
    }
    const token =user.getJwtToken();
    console.log(token);
console.log(token);
    // Options for cookie
    const options = {
        expires: new Date(
            Date.now() + 20 * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
    };
    
    return res.status(200).cookie("token", token, options).json({
        success: true,
        token,
        user,
    })

};
exports.isAuthenticatedUser = async (req, res) => {
    try {
        const { token } = req.cookies;
        console.log("hi");
        console.log(token);

        if (!token) {
            return res.status(401).json({ success: false, message: "Please login first" });
        }

        const decoded = jwt.verify(token, "nasdadaasdas");

        req.user = await FormDataModel.findById(decoded.id);
return res.status(200).json({success:true
})



    } catch (error) {
        console.error("Authentication error:", error);
        return res.status(401).json({ success: false, message: "Invalid token" });
    }
};











   

  

