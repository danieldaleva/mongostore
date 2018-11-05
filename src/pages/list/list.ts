import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { FormBuilder } from '@angular/forms';
import { Item } from './../../models/item';
import { Cart } from './../../models/cart';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  public form: any;
  private icons: string[];
  private cart: Cart;
  private item: Item;
  public items: Array<{ id: string, description: string, icon: string, price: number }>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public fb: FormBuilder, ) {

    //init form
    this.form = fb.group({
      qty: []
    });

    //init Cart
    this.cart = new Cart();
    this.cart.id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    this.cart.total_value = 0;

    // ramdom icons
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
      'american-football', 'boat', 'bluetooth', 'build'];

    // init items to populate the list
    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.item = new Item();
      this.item.id = i.toString();
      this.item.description = 'Item ' + i;
      this.item.icon = this.icons[Math.floor(Math.random() * this.icons.length)];
      this.item.price = 10;
      this.item.qty = 0;

      this.items.push(this.item);
    }
  }

  addToCart(i: number, item: Item) {
    let qty = this.form.value.qty;
    // console.log(i + " =  " + qty);
    if (qty > 0) {
      // add or update
      item.qty = qty;
      // New item
      if (this.cart.items.indexOf(item) === -1) {
        this.cart.items.push(item);
        this.cart.last_update = new Date();
        console.log(this.cart);
      } else {
        // update item
        let  item_update: any = this.cart.items.filter(item => item.id === item.id);
        item_update.qty = qty;
        item_update.last_update = new Date();
        console.log(this.cart);
      }
    } else {
      // remove item when qty = 0;
      for (var i = this.cart.items.length - 1; i >= 0; --i) {
        if (this.cart.items[i].id == item.id) {
          this.cart.items.splice(i, 1);
        }
      }
      console.log(this.cart);
    }
  }

  showCart() {
    if (this.cart.items.length > 0) {
      this.navCtrl.push('CartPage', { cart: this.cart });
    } else {
      alert("Adicione um item no Carrinho")
    }
  }

}
