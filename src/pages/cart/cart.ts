import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { Cart } from './../../models/cart';

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {
  private cart: Cart = new Cart();
  public total: number = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {

    if (this.navParams.get('cart')) {
      this.cart = this.navParams.get('cart');
      for(let i=0; i<= this.cart.items.length; i++){
        console.log(this.cart.items)
        //this.total += this.cart.items[i].price * this.cart.items[i].qty;
      }
      console.log(this.cart)
    } else {
      this.navCtrl.setRoot('ListPage');
    }
  }

  updateCollection() {

  }
}
