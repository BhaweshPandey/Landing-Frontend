import { API_ENDPOINT, REQUEST_METHOD } from "../../api/endpoint.types";
import * as SCHEMAS from "./schemas"

const TRANSFORMERS = {
  categoryListTransformer: (data:Record<string,any>) => ({
    ...data,
    created_on: new Date(data.created_on),
    edited_on: new Date(data.edited_on),
  }),
  categoryListsTransformer: (data:Record<string,any>) => ({
    ...data,
    results: data.results.map(TRANSFORMERS.categoryListTransformer),
  }),
};

export const API_ENDPOINTS = {
  getCategories: new API_ENDPOINT({
    url: "/product/product-category/",
    method: REQUEST_METHOD.GET,
    response: SCHEMAS.CategoryLists,
    transformer: TRANSFORMERS.categoryListsTransformer,
  })
};
