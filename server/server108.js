/*
EL GET se utiliza para actualizar datos, obtener datos
EL POST se utiliza para crear nuevos registros
EL PUT se utiliza para actualizar registros
*/
require('./config/config')
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
//Cuando se vea el app.use, son como middleware ya que cada vez que pase por ahi el codigo se van a disparar esas funciones
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use(require('./routes/usuario105'));
 

mongoose.connect(process.env.URLDB, {useNewUrlParser:true, useCreateIndex:true} , (err,res) => {
    if(err) {
        throw err;
    } else {
        console.log('Base de Datos ONLINE');
    }
})

app.listen(process.env.PORT, () => {
    console.log('Escuchando epuerto: ', 3000);
});