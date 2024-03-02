import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { SignUpData } from '../data-type';
@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private _http:HttpClient) { }

  url:string ="http://localhost:3000/seller";

  userSignup(data:SignUpData){
    return this._http.post(this.url, data);

  }

}
