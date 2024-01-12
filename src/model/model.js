export default class product_model{
    constructor(_id,_name,_desc,_price,_imageurl){
        this.id=_id;
        this.name=_name;
        this.desc=_desc;
        this.price=_price;
        this.imageUrl=_imageurl
    }
    static gets(){
        return product
    }
    static add(name, desc, price, imageUrl){
        let newproduct=new product_model(
            product.length+1,
            name,
            desc,
            price, 
            imageUrl
        )
        product.push(newproduct);

    }
    static id(id){
        return product.find((num)=> num.id==id)
    }
    static update(productObj,images) {
        const index = product.findIndex(
          (p) => p.id == productObj.id
        );
        product[index] = productObj;
        product[index].imageUrl=images;
      }
      static delete(id){
        let newarr=product.filter((values)=>{
          return values.id!=id
       })
        return product=newarr
      }
}

var product=[
    new product_model(1,"GOT","asdfghASDFASDF",100),
    new product_model(2,"BOOK","asdfghASDFASDF",200),
    new product_model(3,"Naruto","asdfghASDFASDF",300),
    
]