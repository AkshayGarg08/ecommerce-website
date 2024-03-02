import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import {Router} from '@angular/router'
import { SignUpData } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css'
})
export class SellerAuthComponent implements OnInit{

  constructor(private _seller:SellerService, private _router:Router){ }

  ngOnInit():void{
    this._seller.reloadSeller();
  }
  signUp(data:SignUpData): void{
    this._seller.userSignup(data);
  }

}
