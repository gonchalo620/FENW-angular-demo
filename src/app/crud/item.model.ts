export class Item {
    constructor(public id: number, public name: string) { }

    toString() {
        return '[id:' + this.id + ',name:' + this.name + ']';
    }
}