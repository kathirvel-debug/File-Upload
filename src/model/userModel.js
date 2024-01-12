export default class userModel{
constructor (_name,_email,_password){
    this.name=_name;
    this.email=_email;
    this.password=_password;

}
static addUser(name,email,password){
    let user=new userModel(name,email,password)
    userAdding.push(user)
}
static users(){
    return userAdding;
}
static vaild(email,pass){
const result =userAdding.find((u)=>u.email==email && u.password==pass)
return result;
}
}
let userAdding=[];