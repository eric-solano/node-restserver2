const express = require('express');
const bcrypt = require('bcrypt');
const Usuario = require('../models/usuario96');
const app = express();

app.get('/usuario', function (req, res) {
    res.json('get Usuario LOCAL!!!')
  });
  
app.post('/usuario', function (req, res) {
  let body = req.body;
  let usuario = new Usuario({
    nombre: body.nombre,
    email: body.email,
    password: bcrypt.hashSync(body.password, 10),
    //img: body.img,
    role: body.role
  });

  usuario.save( (err,usuarioDB) => {
    if(err){
      return res.status(400).json({
        ok: false,
        err
      })
    }

    res.json({
      ok:true,
      usuario: usuarioDB
    })

  })
  
});

app.put('/usuario/:id', function (req, res) {
  let id = req.params.id;
  res.json({
    id
  });
});

app.delete('/usuario', function (req, res) {
  res.json('delete Usuario')
});

  module.exports = app;