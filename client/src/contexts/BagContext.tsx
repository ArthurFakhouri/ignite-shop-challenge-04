import { createContext, ReactNode, useEffect, useReducer, useState } from "react";
import { addNewItem, deleteItem, emptyCart, updateItem } from "../reducers/bag/actions";
import { bagReducer } from "../reducers/bag/reducer";

interface Product {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    defaultPriceId: string;
    amount: number;
}

type AnimationEnum = "initialState" | "moveLeft" | "moveRight"

interface BagContextType {
    bag: Product[];
    animation: AnimationEnum;
    changeAnimation: (animationType: AnimationEnum) => void;
    addNewProduct: (product: Product) => void;
    updateProduct: (productId: string, amount: number) => void;
    deleteProduct: (productId: string) => void;
    emptyCartItems: () => void;
}

export const BagContext = createContext({} as BagContextType);

interface BagContextProviderProps {
    children: ReactNode;
}

export function BagContextProvider({ children }: BagContextProviderProps) {

    const [bagState, dispatch] = useReducer(
        bagReducer,
        {
            bag: []
        },
        () => {
            if (typeof window !== 'undefined') {
                const storedStateAsJson = localStorage.getItem('@ignite-shop:bag-state-1.0.0');
                if (storedStateAsJson)
                    return JSON.parse(storedStateAsJson).bag;
            }
            return { bag: [] }
        }
    )
    const { bag } = bagState;
    const [animation, setAnimation] = useState<AnimationEnum>("initialState");

    useEffect(() => {
        const stateJSON = JSON.stringify({ bag: bagState });

        localStorage.setItem('@ignite-shop:bag-state-1.0.0', stateJSON);
    }, [bagState])

    function addNewProduct(data: Product) {
        const productId = bag.findIndex((product) =>
            product.id === data.id
        );

        if (productId > -1) {
            const totalAmount = bag[productId].amount + data.amount;

            dispatch(updateItem(data.id, totalAmount));
        } else {
            dispatch(addNewItem(data))
        }
    }

    function updateProduct(productId: string, amount: number) {
        dispatch(updateItem(productId, amount));
    }

    function changeAnimation(animation: AnimationEnum) {
        setAnimation(animation);
    }

    function deleteProduct(productId: string) {
        dispatch(deleteItem(productId));
    }

    function emptyCartItems() {
        dispatch(emptyCart())
    }

    return (
        <BagContext.Provider value={{
            animation,
            changeAnimation,
            bag,
            addNewProduct,
            updateProduct,
            deleteProduct,
            emptyCartItems
        }}>
            {children}
        </BagContext.Provider>
    )
}