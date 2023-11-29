import { OrderReturn as TOrderReturn } from "../api/orderReturn/OrderReturn";

export const ORDERRETURN_TITLE_FIELD = "id";

export const OrderReturnTitle = (record: TOrderReturn): string => {
  return record.id?.toString() || String(record.id);
};
