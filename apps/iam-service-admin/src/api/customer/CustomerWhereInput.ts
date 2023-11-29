import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderReturnWhereUniqueInput } from "../orderReturn/OrderReturnWhereUniqueInput";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type CustomerWhereInput = {
  address?: AddressWhereUniqueInput;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  orderReturns?: OrderReturnWhereUniqueInput;
  orders?: OrderListRelationFilter;
  phone?: StringNullableFilter;
};
