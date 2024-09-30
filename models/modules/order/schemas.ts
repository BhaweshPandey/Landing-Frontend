import { Instance, types } from "mobx-state-tree"
import { PaginatedSchemaBase, BaseModelSchemaBase } from '../../api/endpoint.types';

export const OrderItem = types.model({
    ...BaseModelSchemaBase,
    transaction_id: types.maybeNull(types.string),
    amount: types.maybeNull(types.string),
    status: types.maybeNull(types.string),
    order_completion_timestamp: types.maybeNull(types.string),
    cart_frozen_data: types.maybeNull(types.frozen()),
    cart: types.string,
    transaction: types.string
})
export interface OrderItemType extends Instance<typeof OrderItem> { }

export const OrderItems = types.model({
    ...PaginatedSchemaBase,
    results: types.array(OrderItem)
})
export interface OrderPaginatedType extends Instance<typeof OrderItems> { }