import { API_ENDPOINT, REQUEST_METHOD } from "../../api/endpoint.types";
import * as SCHEMAS from "./schemas"

const TRANSFORMERS = {
  productTransformer: (data:Record<string,any>) => ({
    ...data,
    created_on: new Date(data.created_on),
    edited_on: new Date(data.edited_on),
  }),
  productPaginatedTransformer: (data:Record<string,any>) => ({
    ...data,
    results: data.results.map(TRANSFORMERS.productTransformer),
  }),
};

export const API_ENDPOINTS = {
  getProducts: new API_ENDPOINT({
    url: "/product/product/",
    method: REQUEST_METHOD.GET,
    response: SCHEMAS.ProductPaginated,
    transformer: TRANSFORMERS.productPaginatedTransformer,
  }),
  getProductDetails: new API_ENDPOINT({
    url: "/product/product/{id}",
    method: REQUEST_METHOD.GET,
    response: SCHEMAS.ProductDetail,
    transformer: TRANSFORMERS.productTransformer,
  }),
};
