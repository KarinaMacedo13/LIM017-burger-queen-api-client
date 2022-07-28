export interface Products {
  id: number;
  name: string;
  price: number;
  image: string;
  type: string;
  dateEntry: string;
}

export interface productSinId {
  name: string;
  price: number;
  image: string;
  type: string;
  dateEntry: string;
}

export interface ordersProduct {
  qty: number;
  total: number;
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
    type: string;
    dateEntry: string;
  };
}
