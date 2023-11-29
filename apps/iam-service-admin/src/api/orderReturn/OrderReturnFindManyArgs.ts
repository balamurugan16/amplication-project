import { OrderReturnWhereInput } from "./OrderReturnWhereInput";
import { OrderReturnOrderByInput } from "./OrderReturnOrderByInput";

export type OrderReturnFindManyArgs = {
  where?: OrderReturnWhereInput;
  orderBy?: Array<OrderReturnOrderByInput>;
  skip?: number;
  take?: number;
};
