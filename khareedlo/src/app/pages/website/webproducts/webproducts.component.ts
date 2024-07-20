import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-Webproducts',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './webproducts.component.html',
  styleUrl: './webproducts.component.css'
})
export class WebproductsComponent implements OnInit  {
  productList: any[]=[];

  constructor (private prodSrv: ProductService){

  }
  ngOnInit(): void {
      this.getAllProducts();
   
  }
  getAllProducts(){
    this.prodSrv.getProducts().subscribe((res:any)=>{
      this.productList= res.data;
    })
  }
  addToCart(productId:number){
    const addToCartObj={
      "CartId": 0,
      "CustId": 379,
      "ProductId": productId,
      "Quantity": 1,
      "AddedDate": new Date()
    }
    this.prodSrv.addToCart(addToCartObj).subscribe((res:any)=>{
      if(res.result){
        alert("Product added to cart")
        this.prodSrv.updatedCart$?.next(true);
      } else{
        alert(res.message)
      }
    })
  }
}

