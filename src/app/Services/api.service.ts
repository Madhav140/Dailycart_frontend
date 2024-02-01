import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  server_url = 'http://localhost:3000'
  constructor(private http: HttpClient) { 
    if(sessionStorage.getItem("token")){
      this.getwishCount() //to avoid removal of the value while refresh
    }
  }


  getAllProductsApi() {
    return this.http.get(`${this.server_url}/all-products`)
  }

  registerApi(user: any) {
    return this.http.post(`${this.server_url}/register`, user)
  }


  loginApi(user: any) {
    return this.http.post(`${this.server_url}/login`, user)
  }

  getAproductApi(id:any){
    return this.http.get(`${this.server_url}/getproduct/${id}`)
  }

  addTokentoHeader(){
    //create a object for the class httpheaders
    let headers = new HttpHeaders()
    const token = sessionStorage.getItem("token")
    if(token){
      //appending token to the headers of the request
      headers = headers.append("Authorization",`Bearer ${token}`)
    }
    return {headers}
   
  }

 addtoWishlistApi(product:any) {
    return this.http.post(`${this.server_url}/add-wishlist`,product,this.addTokentoHeader())
  }


  getFromWishlist(){
    return this.http.get(`${this.server_url}/wishlist/allproduct`,this.addTokentoHeader())
  }

  removeFromWish(id:any){
    return this.http.delete(`${this.server_url}/wishlist/remove/${id}`,this.addTokentoHeader())
  }

  //to get wishlist count and display it in header section
   wishListCount = new BehaviorSubject(0)

   getwishCount(){
    this.getFromWishlist().subscribe((res:any)=>{
      this.wishListCount.next(res.length)
    })
   }


   addToCartApi(product:any){
       return this.http.post(`${this.server_url}/add-cart`,product,this.addTokentoHeader())
   }


}
