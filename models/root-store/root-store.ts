import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { DummyStore } from "@/models/modules/dummy/store"
import { i18nStore } from "@/models/modules/i18n/store"
import { UserStore } from "@/models/modules/user/store"
import { NotificationStore } from "@/models/modules/notification/store"
import { SettingsStore } from "@/models/modules/settings/store"
import { GlobalsStore } from "@/models/modules/globals/store"
import { GalleryStore } from "@/models/modules/gallery/store"
import { ProductStore } from '@/models/modules/product/store';
import { CategoryStore } from "@/models/modules/category/store"
import { CartStore } from "../modules/mycart/store"
/**
 * A RootStore model.
 */
// prettier-ignore
export const RootStoreModel = types.model("RootStore").props({
    userStore: types.optional(UserStore, {} as any),
    globalsStore: types.optional(GlobalsStore, {} as any),
    galleryStore: types.optional(GalleryStore, {} as any),
    dummyStore: types.optional(DummyStore, {} as any),
    i18nStore: types.optional(i18nStore, {} as any),
    notificationStore: types.optional(NotificationStore, {} as any),
    settingsStore: types.optional(SettingsStore, {} as any),
    productStore: types.optional(ProductStore, {} as any),
    cartStore: types.optional(CartStore, {} as any),
    categoryStore: types.optional(CategoryStore, {} as any)
})
/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
