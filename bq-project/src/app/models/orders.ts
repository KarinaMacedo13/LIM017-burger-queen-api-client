import { ordersProduct } from "./products";
export interface orders {
      id: number;
      userId: number;
      client: string;
      products:[
            {
                  qty: number,
                  product: {
                        id: number;
                        name: string;
                        price: number;
                        image: string;
                        type: string;
                        dateEntry: string;
                  }
            }
      ],
      status: string;
      dataEntry: string;
}
export interface order {
      id?:number;
      userId?: number;
      client: string;
      products: ordersProduct[];
      status: string;
      dataEntry: string;
      total: number;
}