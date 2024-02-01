import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

  constructor(private api:ApiService, private route:ActivatedRoute){}

product:any={}

  ngOnInit(): void {
     this.route.params.subscribe((res:any)=>{
      const id = res.id
      console.log(id);
      
      this.getProduct(id)
      
     })
  }

  getProduct(id:any){
    this.api.getAproductApi(id).subscribe({
      next:(res:any)=>{
       this.product=res[0]
       console.log(this.product);
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
    if(localStorage.getItem('token')){
      alert('proceed')
    }
    else{
      alert('Please login')
    }
  }

}
