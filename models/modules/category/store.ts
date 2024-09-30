import { types, flow } from "mobx-state-tree"
import { withEnvironment } from "../../extensions/with-environment"
import * as SCHEMAS from "./schemas"
import { API_ENDPOINTS } from "./endpoints"
import { ACTION_RESPONSES } from "../../api/endpoint.types"

export const CategoryStore = types
    .model({
        categoryListData: types.maybeNull(SCHEMAS.CategoryLists)
    })
    .extend(withEnvironment)
    .actions((self) => ({
        getCategoryList: flow(function* () {
            const response = yield self.environment.api.call(API_ENDPOINTS.getCategories, {})
            let error = null;
            switch (response.status) {
                case 200:
                    self.categoryListData = SCHEMAS.CategoryLists.create(response.data)
                    return ACTION_RESPONSES.success
                case 400:
                    error = response.data;
                    return {...ACTION_RESPONSES.failure, code: response.status, error: error}
                default:
                    console.error("UNHANDLED ERROR")
                    break
            }
            return ACTION_RESPONSES.failure
        })
    }))
