const mongoose=require("mongoose")


const volSchema = new mongoose.Schema({
    de: { type:String, required:true},
    horaire: { type:Date},
    compagnie: { type:String, required:true},
    prix: { type:Number, required:true},
    note: { type:Number, required:true},
    ref: { type:Number, required:true},

})

module.exports =mongoose.model("Vol", volSchema);