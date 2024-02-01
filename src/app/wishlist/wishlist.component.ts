import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit{

  constructor(private api:ApiService){}

  products:any=[]

   ngOnInit(): void {
     this.getWishlist()
   }


   getWishlist(){
    this.api.getFromWishlist().subscribe({
      next:(res:any)=>{      
        console.log(res);  
        this.products=res
      },
      error:(err:any)=>{
        console.log(err);
        alert(err.error)
        
      }
     })
   }


   deleteWish(id:any){
    this.api.removeFromWish(id).subscribe({
      next:(res:any)=>{      
        alert('Product removed from wishlist')
        this.getWishlist()
        this.api.getwishCount()
      },
      error:(err:any)=>{
        console.log(err);
        alert(err.error)
      }
    })
   }




}
