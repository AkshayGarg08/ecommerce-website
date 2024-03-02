import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { SignUpData } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  isSellerLogginIn = new BehaviorSubject<boolean>(false);

  constructor(private _http: HttpClient, private _router: Router) { }

  url: string = "http://localhost:3000/seller";

  userSignup(data: SignUpData) {
    this._http.post(this.url, data, { observe: 'response' }).subscribe((result) => {
      this.isSellerLogginIn.next(true);
      localStorage.setItem('seller', JSON.stringify(result.body));
      this._router.navigate(['seller-home'])
      // console.log(result)
    });
 
  }

  reloadSeller(){
    if(localStorage.getItem('seller')){
      this.isSellerLogginIn.next(true);
      this._router.navigate(['seller-home']);
    }
  }

}
