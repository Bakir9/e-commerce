import { IAddress } from "./address"

export interface IOrderToCreate {
    basketId: string;
    deliveryMethodId: number;
    shipToAddress: IAddress;
  }

  export interface IOrder {
    id: number;
    buyerEmail: string;
    orderDate: string;
    shipToAddress: IAddress;
    deliveryMethod: string;
    shippingPrice: number
    orderItems: IOrderItem[];
    subtotal: number;
    total: number;
    status: string;
  }
  
  export interface IOrderItem {
    firstName: string;
    lastName: string;
    street: string;
    city: string;
    state: string;
    zipCode: string;
  }