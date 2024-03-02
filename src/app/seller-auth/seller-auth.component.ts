import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import {Router} from '@angular/router'
import { LoginData, SignUpData } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css'
})
export class SellerAuthComponent implements OnInit{
  showLogin=false;
  authError='';
  constructor(private _seller:SellerService, private _router:Router){ }

  ngOnInit():void{
    this._seller.reloadSeller();
  }
  signUp(data:SignUpData): void{
    this._seller.userSignup(data);
  }
  login(data:LoginData): void{
    // console.log(data)
    this.authError="";
    this._seller.userLogin(data)
    this._seller.isLoginError.subscribe((isError)=>{
      if(isError){
        this.authError="*User Password or email is not correct"
      }
    })
  }
  openLogin(){
    this.showLogin=true;
  }
  openSignup(){
    this.showLogin=false
  }

}
