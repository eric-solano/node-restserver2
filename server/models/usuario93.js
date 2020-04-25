const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    email: {
        type: String,
        required: [true, 'El correo es necesario']
    },
    password: {
        type: String,
        required: [true, 'El password es obligatoria']
    },
    img : {
        type: String,
        required: false
    },
    role : {
        type: String,
        required: [true, 'El role es obligatoria'],
        default: 'USER_ROLE'        
    },
    estado : {
        type: Boolean,
        required: true,
        default: true
    },
    google : {
        type: Boolean,
        required: false,
        default: true
    }
});


module.exports = mongoose.model('Usuario',usuarioSchema);