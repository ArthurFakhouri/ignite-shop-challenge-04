import axios from "axios";
import { X } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { BagContext } from "../../../../contexts/BagContext";
import { Items } from "../Items";
import { BagContainer, Checkout, CloseBagButton } from "./styles";

export function Bag() {

    const { bag, animation, changeAnimation } = useContext(BagContext);
    const [checkout, setCheckout] = useState({ totalItems: 0, totalToPay: "R$ 0,00" })

    const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)
    const isBagEmpty = bag.length ? false : true;
    const isDisabled = isBagEmpty || isCreatingCheckoutSession ? true : false;

    useEffect(() => {
        setCheckout(bag.reduce((prvValue, curValue) => {
            let prvPrice = Number(prvValue.totalToPay.replace('R$', '').replace('.', '').replace(',', '.'));
            let price = Number(curValue.price.replace('R$', '').replace('.', '').replace(',', '.'))

            prvValue.totalItems += curValue.amount;
            prvValue.totalToPay = new Intl.NumberFormat('currency', {
                style: 'currency',
                currency: 'BRL'
            }).format(prvPrice + (price * curValue.amount));

            return prvValue;
        }, { totalItems: 0, totalToPay: 'R$ 0,00' }))
    }, [bag])

    async function handleBuyProduct() {
        try {
            if(isDisabled)
                return;
            setIsCreatingCheckoutSession(true);
            const productsPriceAndAmount = bag.map((item) => {
                return { price: item.defaultPriceId, quantity: item.amount };
            })

            const response = await axios.post('/api/checkout', {
                productList: productsPriceAndAmount,
            })

            const { checkoutUrl } = response.data;

            window.location.href = checkoutUrl;
        } catch (err) {
            setIsCreatingCheckoutSession(false);

            alert('Falha ao redirecionar ao checkout')
        }
    }

    return (
        <BagContainer animationMove={animation}>
            <strong>Sacola de compras</strong>
            <Items />
            <Checkout>
                <div>
                    <span>Quantidade</span>
                    <span>{checkout.totalItems} itens</span>
                </div>
                <div>
                    <span>Valor total</span>
                    <span>{checkout.totalToPay}</span>
                </div>
                <button disabled={isDisabled} onClick={handleBuyProduct}>Finalizar compra</button>
            </Checkout>
            <CloseBagButton aria-label="CloseHandbag" onClick={() => changeAnimation("moveRight")}> <X size={24} weight="regular" /></CloseBagButton >
        </BagContainer >
    )
}