import userModel from "../model/userModel.js";
import productModel from"../model/model.js"
export default class userController{
loginPage(req,res){
res.render('login')
}
registerPage(req,res){
res.render('register')
}
logindata(req,res){
const {email,password}=req.body;
let data=userModel.vaild(email,password)
if (!data){
    return res.render('login')
}
else{
    let products=productModel.gets();
    res.render('index',{products:products})
}
console.log(email);
}
registerdata(req,res){
const{name,email,password}=req.body;
userModel.addUser(name,email,password)
let test=userModel.users();
console.log(test);
res.render('login')
}
}