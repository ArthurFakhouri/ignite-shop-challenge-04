import { Minus, Plus } from "phosphor-react";
import { ChangeEvent, useContext } from "react";
import { BagContext } from "../../../../contexts/BagContext";
import { CountContainer } from "./styles";

interface CountProps {
    id: string;
    amount: number;
}

export function Count({ id, amount }: CountProps) {

    const { updateProduct } = useContext(BagContext);

    function handleSetCount(value: number) {
        if (amount + value > 0 && amount + value < 101) {
            if (id)
                updateProduct(id, amount + value);
            else
                updateProduct(id, amount + value);
        }
    }

    function handleChangeCount(event: ChangeEvent<HTMLInputElement>) {
        let wishedValueString = event.target.value;
        let wishedValue = 1;

        if (!isNaN(Number(wishedValueString)))
            wishedValue = Number(wishedValueString);
        if (wishedValue < 1)
            wishedValue = 1;
        if (wishedValue > 100)
            wishedValue = 100;

        if (id)
            updateProduct(id, wishedValue)
        else
            updateProduct(id, wishedValue)
    }

    return (
        <CountContainer>
            <button onClick={() => handleSetCount(-1)}><Minus size={18} weight="bold" /></button>
            <input type="text" value={amount} onChange={handleChangeCount} />
            <button onClick={() => handleSetCount(1)}> <Plus size={18} weight="bold" /></button>
        </CountContainer >
    )
}