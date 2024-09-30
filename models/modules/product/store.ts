import { types, flow } from "mobx-state-tree"
import { withEnvironment } from "../../extensions/with-environment"
import * as SCHEMAS from "./schemas"
import { API_ENDPOINTS } from "./endpoints"
import { ACTION_RESPONSES } from "../../api/endpoint.types"

export const ProductStore = types
    .model({
        productPaginated: types.maybeNull(SCHEMAS.ProductPaginated),
        productDetails: types.maybeNull(SCHEMAS.ProductDetail)
    })
    .extend(withEnvironment)
    .actions((self) => ({
        getProductListPaginated: flow(function* () {
            const response = yield self.environment.api.call(API_ENDPOINTS.getProducts, {})
            let error = null;
            switch (response.status) {
                case 200:
                    self.productPaginated = SCHEMAS.ProductPaginated.create(response.data)
                    return ACTION_RESPONSES.success
                case 400:
                    error = response.data;
                    return {...ACTION_RESPONSES.failure, code: response.status, error: error}
                default:
                    console.error("UNHANDLED ERROR")
                    break
            }
            return ACTION_RESPONSES.failure
        }),
        getProductDetails: flow(function* (id:string|null) {
            const response = yield self.environment.api.call(API_ENDPOINTS.getProductDetails, {},{id:id})
            let error = null;
            switch (response.status) {
                case 200:
                    self.productDetails = SCHEMAS.ProductDetail.create(response.data)
                    return ACTION_RESPONSES.success
                case 400:
                    error = response.data;
                    return {...ACTION_RESPONSES.failure, code: response.status, error: error}
                default:
                    console.error("UNHANDLED ERROR")
                    break
            }
            return ACTION_RESPONSES.failure
        }),
    }))
