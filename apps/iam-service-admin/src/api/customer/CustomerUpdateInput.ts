import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { OrderReturnWhereUniqueInput } from "../orderReturn/OrderReturnWhereUniqueInput";
import { OrderUpdateManyWithoutCustomersInput } from "./OrderUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  address?: AddressWhereUniqueInput | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  orderReturns?: OrderReturnWhereUniqueInput | null;
  orders?: OrderUpdateManyWithoutCustomersInput;
  phone?: string | null;
};
