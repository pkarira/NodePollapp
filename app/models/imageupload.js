var mongoose = require('mongoose');
Schema = mongoose.Schema;
var imageSchema = new Schema({ data: Buffer, contentType: String });
module.exports=mongoose.model('images',imageSchema);
