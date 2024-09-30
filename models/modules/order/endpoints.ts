import { API_ENDPOINT, REQUEST_METHOD } from "../../api/endpoint.types";
import * as SCHEMAS from "./schemas"

const TRANSFORMERS = {
  orderDetailTransformer: (data:Record<string,any>) => ({
    ...data,
    created_on: new Date(data.created_on),
    edited_on: new Date(data.edited_on),
  })
};

export const API_ENDPOINTS = {
  getOrderItem: new API_ENDPOINT({
    url: "/order/orders/",
    method: REQUEST_METHOD.GET,
    response: null,
    transformer: null,
  }),
  getOrderItemDetails: new API_ENDPOINT({
    url: "/order/orders/{id}",
    method: REQUEST_METHOD.GET,
    response: null,
    transformer: TRANSFORMERS.orderDetailTransformer,
  }),
};
