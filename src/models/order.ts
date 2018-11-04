import { Cart } from "./cart";

export class Order {
    id: string;
    cart: Cart;
    collect: Date;
    rating: number;
    status: string;
    dt_created: Date;
    client_uid: string;
    order_value: number;


    constructor(client_uid: string, cart: Cart){
        this.client_uid = client_uid;
        this.cart = cart;
    }
}