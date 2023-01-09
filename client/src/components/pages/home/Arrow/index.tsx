import { CaretLeft, CaretRight } from "phosphor-react";
import { ArrowContainer } from "./styles";

interface ArrowProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    left?: any;
}

export function Arrow({ left, ...rest }: ArrowProps) {
    return (
        <ArrowContainer {...rest}>
            {left ?
                <CaretLeft className="arrow-left" size={48} weight="regular" /> :
                <CaretRight className="arrow-right" size={48} weight="regular" />}
        </ArrowContainer>
    )
}