import { CartItem } from "./cart";
import { Order } from './order';

export interface User {
    name: string;
    email: string;
    password: string;
    type: string,
    verified: boolean;
    verificationToken: string;
    address: Address[];
    orders: Order[];
    cart: CartItem[];
    createdAt: Date;
}