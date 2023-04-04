export interface ICreateProduct {
  name: string,
  amount: string,
}

export interface IProducts {
  id: number,
  name: string,
  amount: string,
  orderId: number[],
}