const mongoose=require('mongoose');
const clientSchema= new mongoose.Schema({
    name:String,
    login: {type :String ,required :true,unique :true},
    password:{type: String,required : true},
    admin: {type:Boolean,default:false},
    budget:{type:Number,default:200,min:0}
});
module.exports=clientSchema;
const dbConnection=require('../controllers/db.controller');
const clients=dbConnection.model('clientsBd',clientSchema,'clients');
module.exports.model =clients;


