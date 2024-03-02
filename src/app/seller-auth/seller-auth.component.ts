import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import {Router} from '@angular/router'
import { SignUpData } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css'
})
export class SellerAuthComponent {

  constructor(private _seller:SellerService, private _router:Router){

  }

  signUp(data:SignUpData): void{
    this._seller.userSignup(data).subscribe((result)=>{

      if(result){
        this._router.navigate(['seller-home']);
      }

      console.log("Data send", result)
    })
  }

}
