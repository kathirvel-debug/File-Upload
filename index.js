import express from 'express'
import ProductController from './src/controller/Controller.js';
import path from 'path';
import layout from'express-ejs-layouts';
import validationRequest from './src/middelwar/middel.js';
import upload from'./src/middelwar/fileUpload.js';
import userController from './src/controller/userController.js';
// const express = require('express');

const server = express();
// set up view engine
server.set('view engine','ejs');
server.use(layout)
//setting up the ejs file path drct
server.set("views" , path.join(path.resolve(),'src','views'))
//url encode
server.use(express.urlencoded());
// create an instance of ProductController
const productController = new ProductController(); 
server.get('/', (productController.getProducts));
server.get('/addNewproduct',(productController.formrender))
server.post('/data',upload.single('imageUrl'),validationRequest,(productController.formsfill))
server.get('/update-data/:id',(productController.update))
server.post('/update-list',upload.single('imageUrl'),(productController.updateNewdata))
server.post('/update-delete/:id',(productController.deleteProduct))
const userControllers=new userController();
server.get('/login',(userControllers.loginPage));
server.get('/register',(userControllers.registerPage));
server.post('/login',userControllers.logindata);
server.post('/register',userControllers.registerdata)
// server.use(express.static('src/views'));
server.use(express.static('public'));
    // return res.send('Welcome to Inventory App');
server.listen(8009);
//console.log('Server is listening on pert ');
