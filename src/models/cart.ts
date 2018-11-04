import { Item } from "./item";

export class Cart {
    id: string;
    place_id: string;
    uid: string;
    items: Item[] = new Array();
    last_update: Date;
    total_value: number;

    constructor(id: string, place_id: string, uid: string, item: Item[], total_value: number){
        this.id = id;
        this.place_id = place_id;
        this.items = item;
        this.uid = uid;
        this.total_value = total_value;
    }
}