// import { Rating } from './rating';

// export interface Product {
//     name: string;
//     brand: string;
//     description: string;
//     images: string[];
//     price: number;
//     discountPrice: number;
//     ratings: Rating[];
//     ratingCount: number;
//     deliveryDate: string;
//     shippingTo: string;
//     category: string;
//     quantity: number;
// }
// https://fakestoreapi.com/products

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

interface Rating {
  rate: number;
  count: number;
}