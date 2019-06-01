export interface Category {
    id: number;
    name: string;
    parent: number;
    children: Category[];
}
