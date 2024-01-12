

import path from 'path';
import product_model from '../model/model.js'
import { log } from 'console';
export default class ProductController{

    getProducts(req,res,next){
        console.log(path.resolve());
        const product=product_model.gets()
        console.log(product);
        res.render("index",{products:product})
    }
    formrender(req,res,next){
        res.render('forms',{errorMessage: null})
    }
    formsfill(req,res){
        console.log(req.body);
        const {name,desc,price,}=req.body
        const filename='images/'+req.file.filename;

        product_model.add(name,desc,price,filename)
        let products=product_model.gets()
        res.render('index',{products:products})
       
    }
    update(req,res){
        const id=req.params.id;
        console.log(id)
        const productId=product_model.id(id)
        console.log(productId)
        res.render('update-product',{updated:productId,errorMessage: null})
    }

    updateNewdata(req,res){
        console.log(req.body);
        
        const filename='images/'+req.file.filename;
        product_model.update(req.body,filename)
        let products=product_model.gets();
        res.render('index',{products:products})
    }
    // remove(req,res){
    //     const id=req.params.id
    //     product_model.delete(id);
        
    //     let products=product_model.gets();
    //     console.log("Deleted",products)
    //     res.render('home',{products:products})
    // }
    deleteProduct(req, res){
        const id = req.params.id;
        const removed=product_model.delete(id)
        console.log(removed);
        res.render('index',{products:removed})
      }
}