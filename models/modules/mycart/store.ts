import { types, flow } from "mobx-state-tree"
import { withEnvironment } from "../../extensions/with-environment"
import * as SCHEMAS from "./schemas"
import { API_ENDPOINTS } from "./endpoints"
import { ACTION_RESPONSES } from "../../api/endpoint.types"

export const CartStore = types
    .model({
        cartData: types.maybeNull(SCHEMAS.CartSchema),
        cartItemData: types.maybeNull(SCHEMAS.CartItemsData)
    })
    .extend(withEnvironment)
    .actions((self) => ({
        addToCart: flow(function* (data) {
            const response = yield self.environment.api.call(API_ENDPOINTS.addToCart, data)
            let error = null;
            switch (response.status) {
                case 201:
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
        getCartData: flow(function* () {
            const response = yield self.environment.api.call(API_ENDPOINTS.getCart, {})
            let error = null;
            switch (response.status) {
                case 200:
                    self.cartData = SCHEMAS.CartSchema.create(response.data)
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
        getCartItemData: flow(function* () {
            const response = yield self.environment.api.call(API_ENDPOINTS.getCartItemData, {})
            let error = null;
            switch (response.status) {
                case 200:
                    self.cartItemData = SCHEMAS.CartItemsData.create(response.data)
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
        deleteCartItem: flow(function* (id:string|null) {
            const response = yield self.environment.api.call(API_ENDPOINTS.deleteCartItem, {},{id:id})
            let error = null;
            switch (response.status) {
                case 200:
                    return ACTION_RESPONSES.success
                case 400:
                    return ACTION_RESPONSES.failure
                default:
                    console.error("UNHANDLED ERROR")
                    break
            }
            return ACTION_RESPONSES.failure
        }),
    }))