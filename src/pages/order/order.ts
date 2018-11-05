import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { Order } from './../../models/order';

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html'
})
export class OrderPage {
  private order: Order = new Order();
  public total: number = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {

    if (this.navParams.get('order')) {
      this.order = this.navParams.get('order');
      console.log(this.order)
    } else {
      this.navCtrl.setRoot('ListPage');
    }
  }
}
