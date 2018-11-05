import { Item } from "./item";

export class Cart {
    id: string;
    items: Item[] = new Array();
    last_update: Date;
    total_value: number;
}