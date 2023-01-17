import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { BagContext } from "../../../../contexts/BagContext";
import { Actions } from "../Actions";
import { Details, ImageContainer, Item, ItemsContainer } from "./styles";

interface Product {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    defaultPriceId: string;
    amount: number;
}

export function Items() {

    const { bag } = useContext(BagContext);
    const [items, setItems] = useState([] as Product[])//avoid hydration error

    useEffect(() => setItems(bag), [bag]);

    return (
        <ItemsContainer>
            {
                items.map(item =>
                    <Item key={item.id}>
                        <ImageContainer>
                            <Image src={item.imageUrl} width={110} height={100} alt="" />
                        </ImageContainer>
                        <Details>
                            <label htmlFor={`quantity${item.id}`}>{item.name}</label>
                            <strong>{item.price}</strong>
                            <Actions id={item.id} amount={item.amount} />
                        </Details>
                    </Item>
                )
            }
        </ItemsContainer>
    )
}