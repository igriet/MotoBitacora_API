"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bitacora_1 = require("../models/Bitacora");
function getAll(req, res, next) {
    Bitacora_1.default.find(function (err, registros) {
        if (err) {
            res.status(500).json({ err: err });
        }
        res.status(200).json({ registros: registros });
    });
}
exports.getAll = getAll;
function getById(req, res, next) {
    var id = req.params.id;
    Bitacora_1.default.findById(id, function (err, registro) {
        if (err) {
            res.status(500).json({ err: err });
        }
        res.status(200).json({ registro: registro });
    });
}
exports.getById = getById;
function create(req, res, next) {
    var kilometraje = req.body.kilometraje;
    var descripcion = req.body.descripcion;
    if (!kilometraje) {
        res.status(422).json({ err: "Kilometraje requerido" });
        return;
    }
    if (!descripcion) {
        res.status(422).json({ err: "Descripcion requerida" });
        return;
    }
    var registro = new Bitacora_1.default({
        kilometraje: kilometraje,
        descripcion: descripcion
    });
    registro.save(function (err, registro) {
        if (err) {
            res.status(500).json({ err: err });
        }
        res.status(200).json({ registro: registro });
    });
}
exports.create = create;
function update(req, res, next) {
    var id = req.params.id;
    Bitacora_1.default.findByIdAndUpdate(id, req.body, function (err, registro) {
        if (err) {
            res.status(500).json({ err: err });
        }
        res.status(200).json({ registro: registro });
    });
}
exports.update = update;
function remove(req, res, next) {
    var id = req.params.id;
    Bitacora_1.default.findByIdAndRemove(id, function (err, registro) {
        if (err) {
            res.status(500).json({ err: err });
        }
        res.status(200).json({ registro: registro });
    });
}
exports.remove = remove;
//# sourceMappingURL=BitacoraController.js.map