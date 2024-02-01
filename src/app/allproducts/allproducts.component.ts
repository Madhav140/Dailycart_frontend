import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {

  allProducts:any=[]
  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.api.getAllProductsApi().subscribe({
      next:(res:any)=>{
        this.allProducts=res
        console.log(this.allProducts);
        

      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

  addtoWish(product:any){
    if(sessionStorage.getItem('token')){
      this.api.addtoWishlistApi(product).subscribe({
        next:(res:any)=>{      
          console.log(res);  
          this.api.getwishCount()
          alert('product added to wishlist successfully')  
        },
        error:(err:any)=>{
          console.log(err);
          alert(err.error)
          
        }
      })
    }
    else{
      alert('Please login')
    }
  }

  

  addtoCart(product:any){
    if(sessionStorage.getItem('token')){
      Object.assign(product,{quantity:1})
      this.api.addToCartApi(product).subscribe({
        next:(res:any)=>{      
          console.log(res);  
          alert('product added to cart successfully') 
          this.api.getcartCount()
        },
        error:(err:any)=>{
          console.log(err);
          alert(err.error)
          
        }
      })
    }
    else{
      alert('Please login')
    }
  }

}
