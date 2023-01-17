import { Trash, X } from "phosphor-react";
import { useContext, useState } from "react";
import { BagContext } from "../../../../contexts/BagContext";
import { Count } from "../Count";
import { ActionsContainer } from "./styles";

interface ActionsProps {
    id: string;
    amount: number;
}

export function Actions({ id, amount }: ActionsProps) {

    const { deleteProduct } = useContext(BagContext);
    const [activeDelete, setActiveDelete] = useState(false);

    function handleDeleteItem(productId: string) {
        if (activeDelete) {
            deleteProduct(productId);
        } else {
            setActiveDelete(true);
        }
    }

    function handleDisableActiveDelete() {
        if (activeDelete) {
            setActiveDelete(false);
        }
    }

    return (
        <ActionsContainer>
            <button aria-label="RemoveItem"
                onClick={() => handleDeleteItem(id)}
                onMouseLeave={handleDisableActiveDelete}>
                {!activeDelete ? <Trash size={20} weight="regular" /> : <X size={20} weight="regular" />}
                Remover
            </button>
            <Count id={id} amount={amount} />
        </ActionsContainer>
    )
}