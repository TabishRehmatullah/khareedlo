import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  public updatedCart$: Subject<boolean> = new Subject();
  getCategory(){
   return this.http.get(Constant.API_END_POINT+Constant.methods.GET_ALL_CATEGORY);
  }
  getProductsByCategory(id:number){
    return this.http.get(Constant.API_END_POINT+Constant.methods.GET_ALL_PRODUCTS_BY_CATEGORY+id);
   }
  getProducts(){
    return this.http.get(Constant.API_END_POINT+Constant.methods.GET_ALL_PRODUCT);
   }
   saveProduct(obj:any){
    return this.http.post(Constant.API_END_POINT+Constant.methods.CREATE_PRODUCT, obj);
   }
   updateProduct(obj:any){
    return this.http.post(Constant.API_END_POINT+Constant.methods.UPDATE_PRODUCT, obj);
   }
   deleteProduct(id:any){
    return this.http.get(Constant.API_END_POINT+Constant.methods.DELETE_PRODUCT+id);
   }
   addToCart(obj:any){
    return this.http.post(Constant.API_END_POINT+Constant.methods.ADD_TO_CART, obj);
   }
   getCartDataByCustId(custId:any){
    return this.http.get(Constant.API_END_POINT+Constant.methods.GET_CART_BY_CUST+custId);
   }
   removeProductByCartId(cartId:any){
    return this.http.get(Constant.API_END_POINT+Constant.methods.REMOVE_CART+cartId);
   }
   
}
