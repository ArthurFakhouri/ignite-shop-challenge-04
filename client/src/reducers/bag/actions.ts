import { Product } from "./reducer"

export enum ActionTypes {
    ADD_NEW_ITEM = 'ADD_NEW_ITEM',
    UPDATE_ITEM = 'UPDATE_ITEM',
    DELETE_ITEM = 'DELETE_ITEM',
    EMPTY_BAG = 'EMPTY_BAG',
}

export function addNewItem(newProduct: Product) {
    return { type: ActionTypes.ADD_NEW_ITEM, payload: { newProduct } }
}

export function updateItem(productId: string, amount: number) {
    return { type: ActionTypes.UPDATE_ITEM, payload: { productId, amount } }
}

export function deleteItem(productId: string) {
    return { type: ActionTypes.DELETE_ITEM, payload: { productId } }
}

export function emptyCart() {
    return { type: ActionTypes.EMPTY_BAG }
}