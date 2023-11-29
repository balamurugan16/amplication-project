import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type OrderReturnCreateInput = {
  customerId?: CustomerWhereUniqueInput | null;
  orderId?: OrderWhereUniqueInput | null;
};
