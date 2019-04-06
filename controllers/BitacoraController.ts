import Bitacora from "../models/Bitacora";

export function getAll(req, res, next){
    Bitacora.find((err,registros)=>{
        if(err){
            res.status(500).json({err});
        }
        res.status(200).json({registros});
    });
}
 
export function getById(req, res,next){
    const id = req.params.id;
    Bitacora.findById(id,(err,registro)=>{
        if(err){
            res.status(500).json({err});
        }
        res.status(200).json({registro});
    });
}

export function create(req,res,next){
    const kilometraje= req.body.kilometraje;
    const descripcion= req.body.descripcion;

    if(!kilometraje){
        res.status(422).json({err:"Kilometraje requerido"});
        return;
    }
    if(!descripcion){
        res.status(422).json({err:"Descripcion requerida"});
        return;
    }
    const registro =  new Bitacora({
        kilometraje,
        descripcion
    });

    registro.save((err,registro)=>{
        if(err){
            res.status(500).json({err});
        }
        res.status(200).json({registro});
    });
}

export function update(req,res,next){
    const id = req.params.id;

    Bitacora.findByIdAndUpdate(id,req.body,(err,registro)=>{
        if(err){
            res.status(500).json({err});
        }
        res.status(200).json({registro});
    });
}

export function remove(req,res,next){
    const id = req.params.id;

    Bitacora.findByIdAndRemove(id,(err,registro)=>{
        if(err){
            res.status(500).json({err});
        }
        res.status(200).json({registro});
    });
}