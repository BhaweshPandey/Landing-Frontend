import { Instance, types } from "mobx-state-tree"
import { BaseModelSchemaBase, PaginatedSchemaBase } from '../../api/endpoint.types';

// All Category 

export const Category = types.model({
    ...BaseModelSchemaBase,
    name: types.string,
    description: types.string,
    image: types.string,
    order: types.number
})
export interface CategoryListType extends Instance<typeof Category> { }

export const CategoryLists = types.model({
    ...PaginatedSchemaBase,
    results: types.array(Category),
})
export interface CategoryPaginatedType extends Instance<typeof CategoryLists> { }