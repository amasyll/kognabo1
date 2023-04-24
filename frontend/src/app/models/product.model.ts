export interface ProductModel {
    _Id: string;
    seller_Id :string
    imageUrl: string;
    title: string;
    description: string;
    price: number;
    quantity?: number;
    tvaRate?: number;
    date: Date | number
}