export default class {
    id: string;
    name: string = '';
    price: number = 999999.0;
    category: string = '未分类';
    saleVolume: number = 0;

    constructor(id: string) {
        this.id = id;
    }
}
