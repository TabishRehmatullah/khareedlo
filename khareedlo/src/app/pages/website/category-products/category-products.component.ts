import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-products.component.html',
  styleUrl: './category-products.component.css'
})
export class CategoryProductsComponent {
  activatedCategoryId: number=0;
  products: any[]= [];
  constructor (private activatedRoute: ActivatedRoute, private prodSrv: ProductService){
    this.activatedRoute.params.subscribe((res:any)=>{
      this.activatedCategoryId=res.id;
      this.loadProducts();
    })
  }
  loadProducts(){
    this.prodSrv.getProductsByCategory( this.activatedCategoryId).subscribe((res:any)=>{
      this.products= res.data;
    })
  }

}
