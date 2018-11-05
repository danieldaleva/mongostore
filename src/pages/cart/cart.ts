import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { Cart } from './../../models/cart';
import { Order } from './../../models/order';
import { Api } from '../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {
  private cart: Cart = new Cart();
  // private order: Order = new Order();
  public total: number = 0;

  constructor(
    private api: Api,
    public navCtrl: NavController,
    public navParams: NavParams) {

    if (this.navParams.get('cart')) {
      this.cart = this.navParams.get('cart');
      if (this.cart) {
        for (let i = 0; i < this.cart.items.length; i++) {
          this.total += this.cart.items[i].price * this.cart.items[i].qty;
        }
      }
      console.log(this.cart)
    } else {
      this.navCtrl.setRoot('ListPage');
    }
  }

  updateCollection() {
    // get order id from back-end
    // this.order.id = '000000000000';
    // this.order.cart = this.cart;
    // this.order.dt_created = new Date();
    // this.order.order_value = this.total;
    // this.navCtrl.push('OrderPage', { order: this.order })

    this.api.post('order', this.cart).subscribe((resp) => {
      console.log(resp);
    });
  }
}
