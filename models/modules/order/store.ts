import { types, flow } from "mobx-state-tree"
import { withEnvironment } from "../../extensions/with-environment"
import * as SCHEMAS from "./schemas"
import { API_ENDPOINTS } from "./endpoints"
import { ACTION_RESPONSES } from "../../api/endpoint.types"

export const ProductStore = types
    .model({
        orderItemData: types.maybeNull(SCHEMAS.OrderItems),
        orderItemDetails: types.maybeNull(SCHEMAS.OrderItem)
    })
    .extend(withEnvironment)
    .actions((self) => ({
        getOrders: flow(function* () {
            const response = yield self.environment.api.call(API_ENDPOINTS.getOrderItem, {})
            let error = null;
            switch (response.status) {
                case 200:
                    self.orderItemData = SCHEMAS.OrderItems.create(response.data)
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
        getOrderItemDetails: flow(function* (id:string|null) {
            const response = yield self.environment.api.call(API_ENDPOINTS.getOrderItemDetails, {},{id:id})
            let error = null;
            switch (response.status) {
                case 200:
                    self.orderItemDetails = SCHEMAS.OrderItem.create(response.data)
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