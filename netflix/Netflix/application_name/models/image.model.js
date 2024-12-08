const mongoose=require('mongoose');
const ImageSchema= new mongoose.Schema({
    name: String,
    desc: String,
    img:
    {
        data: Buffer,
        contentType: String
    }
});  
module.exports=ImageSchema;
const dbConnection=require('../controllers/db.controller');
const images=dbConnection.model('imagesBd',ImageSchema,'images');
module.exports.model =images;  
