const mongoose = require('mongoose');
const uniquevalidator = require('mongoose-unique-validator')

let rolesValidos = {
    values: ['ADMIN_ROLE','USER_ROLE'],
    message: '{VALUES} no es un role valido'
}

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    email: {
        type: String,
        unique: true,
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
        default: 'USER_ROLE',
        enum: rolesValidos
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

usuarioSchema.plugin(uniquevalidator, {message: '{PATH} debe de ser unico'});

module.exports = mongoose.model('Usuario',usuarioSchema);