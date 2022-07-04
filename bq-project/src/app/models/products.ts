export interface Products {
id: number;
name: string;
price: string;
image: string;
type: string;
dateEntry: string;
}

export interface productSinId {
name: string;
price: string;
image: string;
type: string;
}

export interface ordersProduct {
    qty: number,
    product: {
        id: number;
        name: string;
        price: string;
        image: string;
        type: string;
        dateEntry: string;
    }
}