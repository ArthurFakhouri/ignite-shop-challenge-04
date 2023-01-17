import Image from "next/image"
import Link from "next/link"
import { Handbag } from "phosphor-react";
import { useContext, useEffect, useState } from "react"
import { BagContext } from "../../contexts/BagContext";
import { Amount, HandbagButton, HeaderContainer } from "./styles"
import logoImg from '../../assets/logo.svg';

export function Header() {

    const { bag, changeAnimation } = useContext(BagContext);
    const [amountText, setAmountText] = useState("0");

    useEffect(() => {
        const totalItems = bag.reduce((prvValue, curValue) => prvValue + curValue.amount, 0);
        let amount = "";
        if (totalItems > 9)
            amount = "+9";
        else
            amount = "" + totalItems;
        setAmountText(amount);
    }, [bag])

    return (
        <HeaderContainer>
            <Link href="/" aria-label="HomePage">
                <Image src={logoImg} alt="" priority />
            </Link>
            <HandbagButton onClick={() => { changeAnimation("moveLeft") }}>
                <Handbag weight="bold" size={24} />
                {
                    amountText !== "0" ? <Amount>{amountText}</Amount> : null
                }
            </HandbagButton>
        </HeaderContainer>
    )
}