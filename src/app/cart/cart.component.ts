import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private api:ApiService){}

  allProduct:any=[]
  total:Number=0

ngOnInit(): void {
  this.getAllItemCart()
}

getAllItemCart(){
  this.api.getItemFromCartApi().subscribe({
    next:(res:any)=>{      
      console.log(res);    
      this.allProduct=res 
      this.getTotalPrice()
    },
    error:(err:any)=>{
      console.log(err);
    }
  })
}


getTotalPrice(){
  this.total = Math.ceil(this.allProduct.map((item:any)=>item.grandTotal).reduce((n1:any,n2:any)=>n1+n2))
}


removeCart(id:any){
    this.api.removeCartItemApi(id).subscribe((res:any)=>{
      console.log(res);
      this.getAllItemCart()
      this.api.getcartCount()
      
    })
}

}
