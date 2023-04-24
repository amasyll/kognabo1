export interface CartModel {
    _Id: string;
    seller_Id: string;
    customer_Id: string;
    product_Id: string;
    product_title: string;
    quatity: number;
    sum: number;
    date: number | Date
}