import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { CommonModule } from '@angular/common';
import { Route, Router, RouterLink, RouterOutlet } from '@angular/router';
import { WebproductsComponent } from "../webproducts/webproducts.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, WebproductsComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  constructor (private prodSrv: ProductService,private router: Router){
    this.prodSrv.updatedCart$?.subscribe((res:any)=>{
      this.getCartByCustomer();
    })

  }
  ngOnInit(): void {
      this.getAllCategory();
      this.getAllProducts();
      this.getCartByCustomer();
   
  }
  productList: any[]=[];
  categoryList: any[] = [];
  cartList: any[]=[];
  getAllCategory(){
    this.prodSrv.getCategory().subscribe((res:any)=>{
      this.categoryList= res.data;
    })
  }
  navigateToProducts(id: number){
    this.router.navigate(['/products',id])

  }
  getAllProducts(){
    this.prodSrv.getProducts().subscribe((res:any)=>{
      this.productList= res.data;
    })
  }
  getCartByCustomer(){
    this.prodSrv.getCartDataByCustId(379).subscribe((res:any)=>{
      this.cartList= res.data;
    })
  }
  remove(cartId:number){
    this.prodSrv.removeProductByCartId(cartId).subscribe((res:any)=>{
      this.getCartByCustomer();
    })
  }
}
