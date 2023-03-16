const express= require('express');
// const jwt = require("jsonwebtoken");
const router =express.Router();
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");


require("../db/conn");
const User =require("../model/userSchema");
const University =require("../model/userSchema");

router.get('/',(req,res)=>{
    res.send('hello world Router');

});

router.post('/Register',async (req,res) =>{

const {name,email,DOB,gender,password,cpassword,city} = req.body;

// if(!name || !email || !DOB|| !gender || !password || !cpassword || !city ){
//     return res.status(422).json({error: "Please Fill all the Fields"});
// }
// Using Promsies Then and Catch
// User.findOne({email:email}).then((userExist)=>{

//     if(userExist){
//         return res.status(422).json({error: "Email Already Exist"});
//     }

//     const user = new User({name,email,age,gender,password,cpassword,city});
//     user.save().then(() =>{
//         res.status(201).json({message: "User Registered Successfully"});
//     }).catch((err) => res.status(500).json({error: "Failed to Register"}));

// }).catch(err => {console.log(err)});

try{
    const userExist =await User.findOne({email:email});

    if(userExist){
        return res.status(422).json({error: "Email Already Exist"});
    }else if(password != cpassword)
    {
        return res.status(422).json({error: "Password doesn't match."});

    }else{
          const user = new User({name,email,DOB,gender,password,cpassword,city});


    await user.save();

    res.status(201).json({message: "User Registered Successfully"});
    }

  

}catch(err){
    console.log(err);
}

 });


//  LOgin Route

router.post('/Login', async (req,res)=>{

    try{
        let token;
        const {email,password}=req.body;
        if(!email||!password){
            return res.status(400).json({error: "Please Fill the Fields"});
        }
        const userLogin =await User.findOne({email:email});

        if(userLogin){
         const isMatch =await bcrypt.compare(password, userLogin.password); 
        
        token =await userLogin.generateAuthToken();
        console.log(token);

        res.cookie("jwtoken",token,{
            expires:new Date(Date.now()+2589200000),
            httpOnly:true
        });
         if(!isMatch){
            res.status(400).json({error:"Invalid Credentials"});           
        }
        else{
        res.json({message:"User Sign In Successfully"});            
        }
        }
        else{
            res.status(400).json({error:"Invalid Credentials"});           

        }
        

    

    }catch(err){
        console.log(err)
    }

});
// ,authenticate 
router.get('/UserProfile',authenticate,  (req,res) => {
    console.log("Hello my Profile");
    res.send(req.rootUser);
})


router.post('/ManageUniversity',async (req,res) =>{

    const {name,description,url,field,city} = req.body;

    const university = new University({name,description,url,field,city});
    
    
        await university.save();
    
        res.status(201).json({message: "University Added Successfully"});
        
    
     });


module.exports = router;