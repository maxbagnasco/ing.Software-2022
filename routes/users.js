var express = require('express');
var router = express.Router();
const service = require('./../services/userServces')

const getUser = (req,res,next)=>{
  try {
    const{user,password}=req.body
    const result = service.getUser(user,password);
    result ? res.json({message:`Ingreso ok de usuario ${user}`}) : 
    res.send("Ingreso Invalido, pruebe con user ingenieriasoftware | password 123456");
  } catch (error) {
    console.log(error);
    res.json({message:"Error en user o password"})
    //res.sendStatus(403);
    //el servidor entiende la solicitud, pero se niega a autorizarla.
  }
}
const createUser = (req,res,next)=>{
  try {
    const{user,password}=req.body
    const result = service.createUsers(user,password);
    console.log(result)
    result ? res.json({message:`Registro Correcto usuario ${user}`}) : 
    res.send(" FORMATO ===> user: 'x' password: 'x");
  } catch (error) {
    console.log(error);
    res.json({message:"Error al crear usuario"})
    // res.sendStatus(403);
    //el servidor entiende la solicitud, pero se niega a autorizarla.
  }
}
router.post('/login',getUser);
router.post('/create', createUser)
module.exports = router;
