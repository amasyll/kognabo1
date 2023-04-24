export interface ReceiptModel {
    _Id: string;
    seller_Id: string;
    customer_Id: string;
    cart_Id: string;
    isSolved: boolean;
    sum: string;
    date: string;
}