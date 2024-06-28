const mongose=require('mongose')
const userSchema=new moongose.Schema({
  name:{
    type:String,
    required:true
  },
  age:{
    type:number
  },
  mobile:{
    type:number,
    required:true
  },
  adress:{
    type:String,
    required:true
  },
  aadharcard:{
    type:number,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true
  },
  role:{
    type:String,
    enum:['voter','admin'],
    default:voter
  },
  isvoted:{
    type:Boolean,
    default:false
  }
})
const user=mongoose.models('user',userSchema);
module.exports=user;