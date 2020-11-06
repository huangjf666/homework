var express = require('express');
var router = express.Router();
const user = require("../sql/user");


router.get('/', function(req, res, next) {
    console.log('我已经进入register4中');
  
      res.render("register")

  });




// router.post("/in", function (req, res, next) {

// console.log('进入register4的in中');
//   let obj = req.body;
// //   console.log(obj);
//   user.insertMany(obj,(err,data)=>{
//        if(err) {
//          console.log(err)
//        } 
//     //    console.log(data)
//     if(data){
//         res.redirect("/login4");
//     }else{
//         res.redirect("/register4");
//     }
   
//   })
   
// });




router.post("/in", function (req, res, next) {
    console.log('进入login4的in中')
 
   let obj = req.body;
  //  console.log(obj);
  //  console.log(obj)
  //  console.log(obj.username);
  //  console.log(obj.password);
  if(obj.username==''||obj.password==''){
    // console.log(1111111);
    res.redirect("/register4");
  }else{ 
    user.findOne(obj,(err,data)=>{
    if(err) {
      console.log(err)
    } 
    
    // console.log(data);
    if(data){
      res.redirect("/register4");
    }else{
//   console.log(obj);
user.insertMany(obj,(err,data)=>{
       if(err) {
     console.log(err)
      } 
  //    console.log(data)
 if(data){
    res.redirect("/login4");
     }

         })
    }
})
}
   
   


})











module.exports = router;