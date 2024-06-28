const { default: mongoose } = require('mongoose');
const mongose=require('mongose')
const CandiatesSchema=new moongose.Schema({
  name:{
    type:String,
    required:true
  },
  age:{
    type:number
  },
  votes:[
    {
      user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
      },
      votedAt:{
        type:Date,
        default:Date.now()
      }

      }
    
  ],
  
  
})
const Candiates=mongoose.models('Candiates',CandiatesSchema);
module.exports=Candiates;