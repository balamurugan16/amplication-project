import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { OrderReturnWhereUniqueInput } from "../orderReturn/OrderReturnWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  discount?: number | null;
  orderReturns?: OrderReturnWhereUniqueInput | null;
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
  totalPrice?: number | null;
};
