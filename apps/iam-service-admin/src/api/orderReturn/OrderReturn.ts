import { Customer } from "../customer/Customer";
import { Order } from "../order/Order";

export type OrderReturn = {
  createdAt: Date;
  customerId?: Customer | null;
  id: string;
  orderId?: Order | null;
  updatedAt: Date;
};
