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
                        price: string;
                        image: string;
                        type: string;
                        dateEntry: string;
                  }
            }
      ],
      status: string;
      dataEntry: string;
}