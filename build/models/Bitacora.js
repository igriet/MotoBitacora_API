"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var BitacoraSchema = new Schema({
    registro: {
        type: Date,
        default: Date.now
    },
    kilometraje: {
        type: String,
        default: "",
        required: true
    },
    descripcion: {
        type: String,
        default: "",
        required: true
    }
});
exports.default = mongoose.model("Bitacora", BitacoraSchema);
//# sourceMappingURL=Bitacora.js.map