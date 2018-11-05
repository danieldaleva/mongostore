import { Cart } from "./cart";

export class Order {
    id: string;
    cart: Cart;
    dt_created: Date;
    order_value: number;

}