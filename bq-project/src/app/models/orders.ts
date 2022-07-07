import { ordersProduct } from "./products";
// export interface orders {
//       id: number;
//       userId: number;
//       client: string;
//       products:[
//             {
//                   qty: number,
//                   product: {
//                         id: number;
//                         name: string;
//                         price: number;
//                         image: string;
//                         type: string;
//                         dateEntry: string;
//                   }
//             }
//       ],
//       status: string;
//       dataEntry:  Date;
// }
export interface order {
      id?:number;
      userId?: number;
      client?: string;
      products?: ordersProduct[];
      status: string;
      dataEntry?: any;
      total?: number;
      dateProcessed?:  any;
}