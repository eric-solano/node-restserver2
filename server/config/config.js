//==================
//Puerto
//==================

process.env.PORT = process.env.PORT || 3000;

//==================
//Entorno
//==================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//==================
//Base de datos
//==================
let urlDB;
if(process.env.NODE_ENV === 'dev'){
    urlDB = "mongodb://localhost:27017/cafe";
} else {
    urlDB = process.env.MONGO_URI;//'mongodb+srv://eric_solano:KeHQVUO9yCLwtjRN@cluster0-e38m4.mongodb.net/cafe'
}

process.env.URLDB = urlDB
//mongodb+srv://eric_solano:KeHQVUO9yCLwtjRN@cluster0-e38m4.mongodb.net/cafe
//mongodb+srv://eric_solano:KeHQVUO9yCLwtjRN@cluster0-e38m4.mongodb.net/test?retryWrites=true&w=majority