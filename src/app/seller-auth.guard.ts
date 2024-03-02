import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SellerService } from './services/seller.service';

@Injectable({
  providedIn: 'root',
})
export class SellerAuthGuard implements CanActivate {

  constructor(private _sellerService:SellerService) {
    
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let isLoggedIn: boolean = false;
    if(localStorage.getItem('seller')){
      return true;
    }
    this._sellerService.isSellerLogginIn.subscribe((value: boolean) => {
      isLoggedIn = value;
    });
    return isLoggedIn;
  }
  
}
