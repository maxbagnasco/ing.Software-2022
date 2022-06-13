var express = require('express');
var axios  = require ('axios');
var router = express.Router();


const getUser =(user,password)=>{
    //este paso simularia a una peticion a la base de datos
    // y una validacion de si el usuario existe en nuestra base de datos
    const userMock = 'ingenieriasoftware';
    const passwordMock = '123456';
    if (userMock===user && passwordMock===password){
        return true;
    }else return false;
}
const createUsers =(user,password)=>{
   //simulacion de creacion de usuario
   const userJson = {user,password};
   if(user && password){
    userJson.user=user;
    userJson.password;
    return userJson;
   }else return false;
 
}

module.exports={getUser,createUsers};