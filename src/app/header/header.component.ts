import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

      loginUserName:string=""
      wishlistCount:number=0

      constructor(private route:Router,private api:ApiService){}
 
      ngOnInit(): void {
        if(sessionStorage.getItem("username")){
          this.loginUserName = sessionStorage.getItem("username") || ""
        this.api.wishListCount.subscribe((res:any)=>{
          this.wishlistCount=res
        })
        }
        else{
          this.loginUserName = ""
        }
      }


      logout(){
        this.loginUserName = ""
         sessionStorage.removeItem("username")
         sessionStorage.removeItem("token")
         this.route.navigateByUrl("")
      }
}
