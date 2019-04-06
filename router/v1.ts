import * as express from "express";
import {
    getAll,
    getById,
    create,
    update,
    remove    
} from '../controllers/BitacoraController';

export default (app)=>{
    const apiRoutes = express.Router();
    const bitacoraRoutes = express.Router();

    apiRoutes.use("/bitacoras",bitacoraRoutes);

    bitacoraRoutes.get('/', getAll);

    bitacoraRoutes.get('/:id', getById);

    bitacoraRoutes.post('/', create);

    bitacoraRoutes.put('/:id', update); 

    bitacoraRoutes.delete('/:id', remove);

    app.use('/api', apiRoutes);
}

