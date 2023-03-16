const mongoose = require("mongoose");
const bcrypt =require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    DOB:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    tokens:[
        {
            token:{
            type:String,
            required:true
            }
        }
    ]
});

const UniversitySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    },
    field:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    }
});

const Users =new mongoose.model("User",userSchema)
const Universities =new mongoose.model("University",UniversitySchema)


//Hashing

userSchema.pre('save', async function(next){
    console.log("hi from inside")
    if(this.isModified('password')){
        this.password = bcrypt.hashSync(this.password, 12);
        this.cpassword = bcrypt.hashSync(this.cpassword, 12);
    }
    next();
});

//Generating Token

userSchema.methods.generateAuthToken = async function(){
    try{
        let token = jwt.sign({_id:this._id},process.env.SECRET_KEY)
        this.tokens =this.tokens.concat({token:token});
        await this.save();
        return token;
    }catch(err){
        console.log(err);
    }
}

const User = mongoose.model('USER', userSchema);
const University = mongoose.model('UNIVERSITY', UniversitySchema);
module.exports =User;
module.exports = University;


