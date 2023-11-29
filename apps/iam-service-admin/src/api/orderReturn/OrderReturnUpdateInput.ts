import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type OrderReturnUpdateInput = {
  customerId?: CustomerWhereUniqueInput | null;
  orderId?: OrderWhereUniqueInput | null;
};
