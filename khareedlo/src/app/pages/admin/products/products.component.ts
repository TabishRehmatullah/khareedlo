import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { ProductService } from '../../../services/product/product.service';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
isSidePanelVisible: boolean=false;
productObj: any ={
  
    "productId": 0,
    "productSku": "",
    "productName": "",
    "productPrice": 0,
    "productShortName": "",
    "productDescription": "",
    "createdDate": new Date(),
    "deliveryTimeSpan": "",
    "categoryId": 0,
    "productImageUrl": "",
    
}
categoryList:any []=[];
productList:any []=[];

constructor(private productSrv: ProductService ){

}

ngOnInit(): void {  
  this.getAllCategory();
  this.getProducts();
}
getProducts(){
  this.productSrv.getProducts().subscribe((res:any)=>{
    this.productList = res.data;
  })
}
getAllCategory(){
  this.productSrv.getCategory().subscribe((res:any)=>{
    this.categoryList = res.data;
  })
}
onSave(){
  this.productSrv.saveProduct(this.productObj).subscribe((res:any)=>{
    debugger;
    if(res.result){
      alert("Product Create")
      this.getProducts(); 
      
    }else{
      alert(res.message)
    }
  })
}
openSidePanel(){
  this.isSidePanelVisible= true;
}
closeSidePanel(){
  this.isSidePanelVisible=false;
}
onEdit(item:any){
  this.productObj=item;
  this.openSidePanel();
}
onUpdate(){
  this.productSrv.saveProduct(this.productObj).subscribe((res:any)=>{
    debugger;
    if(res.result){
      alert("Product Updated")
      this.getProducts(); 
      
    }else{
      alert(res.message)
    }
  })
}
onDelete(item:any){
  const isDelete = confirm("Are you sure you want t delete the product?")
  if(isDelete){
    this.productSrv.deleteProduct(item.productId).subscribe((res:any)=>{
      debugger;
      if(res.result){
        alert("Product Deleted")
        this.getProducts(); 
        
      }else{
        alert(res.message)
      }
    })
  }
}
}
