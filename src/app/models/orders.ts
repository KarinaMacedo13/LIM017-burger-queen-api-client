import { ordersProduct } from './products';
export interface order {
  id?: number;
  userId?: number;
  client?: string;
  products?: ordersProduct[];
  status: string;
  dataEntry?: any;
  total?: number;
  dateProcessed?: any;
  dataPrepare?: any;
  time?: any;
}
