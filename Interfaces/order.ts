import { Product } from './product';
import { Address } from './address';

interface OrderProduct {
    product: Product;
    quantity: number;
}

export interface Order {
    products: OrderProduct[];
    totalPrice: number;
    address: Address;
    userId: string;
    orderedAt: number;
    status: number;
}