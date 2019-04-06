import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

const BitacoraSchema= new Schema({
    registro:{
        type:Date,
        default:Date.now
    },
    kilometraje:{
        type:String,
        default:"",
        required:true
    },
    descripcion:{
        type:String,
        default:"",
        required:true
    }
});

export default mongoose.model("Bitacora",BitacoraSchema);