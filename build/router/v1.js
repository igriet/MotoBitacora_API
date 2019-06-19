"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var BitacoraController_1 = require("../controllers/BitacoraController");
exports.default = (function (app) {
    var apiRoutes = express.Router();
    var bitacoraRoutes = express.Router();
    apiRoutes.use("/bitacora", bitacoraRoutes);
    bitacoraRoutes.get('/', BitacoraController_1.getAll);
    bitacoraRoutes.get('/:id', BitacoraController_1.getById);
    bitacoraRoutes.post('/', BitacoraController_1.create);
    bitacoraRoutes.put('/:id', BitacoraController_1.update);
    bitacoraRoutes.delete('/:id', BitacoraController_1.remove);
    app.use('/api', apiRoutes);
});
//# sourceMappingURL=v1.js.map