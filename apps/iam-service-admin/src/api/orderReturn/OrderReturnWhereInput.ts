import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type OrderReturnWhereInput = {
  customerId?: CustomerWhereUniqueInput;
  id?: StringFilter;
  orderId?: OrderWhereUniqueInput;
};
