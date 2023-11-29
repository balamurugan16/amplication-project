import { Customer } from "../customer/Customer";
import { OrderReturn } from "../orderReturn/OrderReturn";
import { Product } from "../product/Product";

export type Order = {
  createdAt: Date;
  customer?: Customer | null;
  discount: number | null;
  id: string;
  orderReturns?: OrderReturn | null;
  product?: Product | null;
  quantity: number | null;
  totalPrice: number | null;
  updatedAt: Date;
};
