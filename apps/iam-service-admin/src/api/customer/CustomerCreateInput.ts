import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { OrderReturnWhereUniqueInput } from "../orderReturn/OrderReturnWhereUniqueInput";
import { OrderCreateNestedManyWithoutCustomersInput } from "./OrderCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  address?: AddressWhereUniqueInput | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  orderReturns?: OrderReturnWhereUniqueInput | null;
  orders?: OrderCreateNestedManyWithoutCustomersInput;
  phone?: string | null;
};
