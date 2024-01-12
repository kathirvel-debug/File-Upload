function deleteProduct(id){
    const result=confirm('Are You Sure to Delete the product' )
    if(result){
        fetch('/update-delete/'+id,{method:'post'}).then((value)=>{
            if(value.ok){
                location.reload();
            }
        })
    }
}
