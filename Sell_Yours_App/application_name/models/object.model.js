const mongoose = require('mongoose');
const ObjectSchema = new mongoose.Schema({
    name: String,
    price: { type: Number, min: 0 },
    ownerId: { type: String, default: "" },
    imageBase64: { data: Buffer, contentType: String }

});
module.exports = ObjectSchema;
const dbConnection = require('../controllers/db.controller');
const objects = dbConnection.model('objectsBd', ObjectSchema, 'objects');
module.exports.model = objects;