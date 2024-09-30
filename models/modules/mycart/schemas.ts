import { Instance, types } from "mobx-state-tree"
import { PaginatedSchemaBase, BaseModelSchemaBase } from '../../api/endpoint.types';
import { ProductMedia } from '../product/schemas';

export const CartSchema = types.model({
    id: types.maybeNull(types.string),
    status: types.maybeNull(types.string),
    total_amount_currency: types.maybeNull(types.string),
    total_amount: types.maybeNull(types.string),
    customer: types.maybeNull(types.string),
    coupon: types.maybeNull(types.string)
})
export interface CartSchemaType extends Instance<typeof CartSchema> { }

export const CartPaginatedSchema = types.model({
    ...PaginatedSchemaBase,
    results: types.array(CartSchema)
})
export interface CartPaginatedSchemaType extends Instance<typeof CartPaginatedSchema> { }

export const CartMedia = types.model({
    ProductMedia,
    created_on: types.Date,
    edited_on: types.Date,
    _data: types.maybeNull(types.frozen()),
})
export interface CartMediaType extends Instance<typeof CartMedia> { }

export const ProductStock = types.model({
    ...BaseModelSchemaBase,
    product_media: types.maybeNull(types.array(CartMedia)),
    quantity: types.maybeNull(types.number),
    sku_number: types.maybeNull(types.string),
    barcode: types.maybeNull(types.string),
    price_currency: types.maybeNull(types.string),
    price:types.maybeNull(types.string),
    discount_currency: types.maybeNull(types.string),
    discount: types.maybeNull(types.string),
    product: types.maybeNull(types.string),
    product_option: types.maybeNull(types.array(types.string))
})
export interface ProductStockType extends Instance<typeof ProductStock> { }

export const ProductOption = types.model({
    ...BaseModelSchemaBase,
    product_stock: types.maybeNull(types.array(ProductStock)),
    product: types.maybeNull(types.string),
    option_type: types.maybeNull(types.string)
})
export interface ProductOptionType extends Instance<typeof ProductOption> { }

export const ProductDetails = types.model({
    ...BaseModelSchemaBase,
    name: types.maybeNull(types.string),
    description: types.maybeNull(types.string),
    is_return_available: types.maybeNull(types.boolean),
    is_exchange_available: types.maybeNull(types.boolean),
    return_exchange_days: types.maybeNull(types.number),
    vendor: types.maybeNull(types.string),
    category: types.maybeNull(types.string),
    product_type: types.maybeNull(types.string),
    services: types.maybeNull(types.array(types.string))
})
export interface ProductDetailsType extends Instance<typeof ProductDetails> { }

export const CartItem = types.model({
    ...BaseModelSchemaBase,
    product_details: types.maybeNull(types.array(ProductDetails)),
    quantity: types.maybeNull(types.number),
    product_stock: types.maybeNull(types.string),
    cart: types.maybeNull(types.string)
})
export interface CartItemSchemaType extends Instance<typeof CartItem> { }

export const CartItemsData = types.model({
    ...PaginatedSchemaBase,
    results: types.array(CartItem)
})
export interface CartItemsDataSchemaType extends Instance<typeof CartItemsData> { }