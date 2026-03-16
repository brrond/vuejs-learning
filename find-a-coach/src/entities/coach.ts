export class Coach {
    id: number;
    name: string;
    price: number;
    tags: Array<string>;

    constructor(id: number, name: string, price: number, tags: Array<string>) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.tags = tags;
    }
}
