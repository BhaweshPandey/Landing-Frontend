import { Instance, types } from "mobx-state-tree"
import { BaseModelSchemaBase, PaginatedSchemaBase } from '../../api/endpoint.types';

export const ProductMedia = types.model({
    id: types.identifier,
    description:types.maybeNull(types.string),
    image: types.maybeNull(types.string),
    video: types.maybeNull(types.string),
    video_url: types.maybeNull(types.string),
    media_type: types.string,
    order: types.number,
    product_stock: types.maybeNull(types.string)
})
export interface ProductMediaType extends Instance<typeof ProductMedia> { }

// export const OptionJsonValue = types.model({
//     hex_code: types.string
// })

export const ProductOptionDetails = types.model({
    id: types.identifier,
    product: types.string,
    option_type: types.string,
    option_text_value: types.maybeNull(types.string),
    option_json_value: types.maybeNull(types.frozen())
})
export interface ProductOptionType extends Instance<typeof ProductOptionDetails> { }

export const ProductStock = types.model({
    id: types.string,
    product_media: types.array(ProductMedia),
    product_option: types.maybeNull(types.array(types.string)),
    product_option_details: types.maybeNull(types.array(ProductOptionDetails)),
    quantity: types.maybeNull(types.number),
    sku_number: types.maybeNull(types.string),
    barcode: types.maybeNull(types.string),
    price_currency: types.maybeNull(types.string),
    price: types.maybeNull(types.string),
    discount_currency: types.maybeNull(types.string),
    discount: types.maybeNull(types.string),
    product: types.maybeNull(types.string)
})
export interface ProductStockType extends Instance<typeof ProductStock> { }

export const Product = types.model({
    ...BaseModelSchemaBase,
    product_stock:ProductStock,
    category: types.maybeNull(types.string),
    product_type: types.maybeNull(types.string),
    name: types.maybeNull(types.string),
    description: types.maybeNull(types.string),
    is_return_available: types.maybeNull(types.boolean),
    is_exchange_available: types.maybeNull(types.boolean),
    return_exchange_days: types.maybeNull(types.number),
    vendor:types.maybeNull(types.string),
    services: types.maybeNull(types.array(types.string))
})
export interface ProductType extends Instance<typeof Product> { }

export const ProductPaginated = types.model({
    ...PaginatedSchemaBase,
    results: types.array(Product),
})
export interface ProductPaginatedType extends Instance<typeof ProductPaginated> { }

export const ProductDetail = types.model({
    id: types.string,
    product_stock:types.maybeNull(types.array(ProductStock)),
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
export interface ProductDetailType extends Instance<typeof ProductDetail> { }

export const CarouselDataType = {
    IMAGE:"Image",
    URL:"Url",
    VIDEO:"Video",
    COLOR:"Color",
    SIZE:"Size"
}
