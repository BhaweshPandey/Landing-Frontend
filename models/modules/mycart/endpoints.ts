import { API_ENDPOINT, REQUEST_METHOD } from "../../api/endpoint.types";
import * as SCHEMAS from "./schemas"

const TRANSFORMERS = {
  cartItemTransformer: (data:Record<string,any>) => ({
    ...data,
    created_on: new Date(data.created_on),
    edited_on: new Date(data.edited_on),
  }),
  cartItemsListTransformer: (data:Record<string,any>) => ({
    ...data,
    results: data.results.map(TRANSFORMERS.cartItemTransformer),
  }),
};

export const API_ENDPOINTS = {
  addToCart: new API_ENDPOINT({
    url: "/cart/cart-item/",
    method: REQUEST_METHOD.POST,
    response: null,
    transformer: null,
  }),
  getCart: new API_ENDPOINT({
    url: "/cart/cart/",
    method: REQUEST_METHOD.GET,
    response: null,
    transformer: TRANSFORMERS.cartItemTransformer,
  }),
  getCartItemData: new API_ENDPOINT({
    url: "/cart/cart-item/",
    method: REQUEST_METHOD.GET,
    response: null,
    transformer: TRANSFORMERS.cartItemsListTransformer,
  }),
  deleteCartItem: new API_ENDPOINT({
    url: "/cart/cart-item/{id}",
    method: REQUEST_METHOD.DELETE,
    response: null,
    transformer: null,
  }),
};
