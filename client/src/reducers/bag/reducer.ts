import { ActionTypes } from "./actions";

export interface Product {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    defaultPriceId: string;
    amount: number;
}

interface CartState {
    bag: Product[];
}

export function bagReducer(state: CartState, action: any) {
    switch (action.type) {
        case ActionTypes.ADD_NEW_ITEM:
            return {
                bag: [...state.bag, action.payload.newProduct] as Product[]
            }
        case ActionTypes.UPDATE_ITEM:
            return {
                bag: state.bag.map((product) => {
                    if (product.id === action.payload.productId)
                        return {
                            ...product,
                            amount: action.payload.amount
                        }
                    return product;
                }) as Product[]
            }
        case ActionTypes.DELETE_ITEM:
            return {
                bag: state.bag.filter((product) => product.id != action.payload.productId) as Product[]
            }
        case ActionTypes.EMPTY_BAG: {
            return {
                bag: [] as Product[]
            }
        }
        default:
            return state;
    }
}