import { styled } from "../../../../styles";


export const ArrowContainer = styled('button', {
    position: 'absolute',
    border: 0,
    color: '$gray300',
    background: "linear-gradient(-90deg, #12121400 0%, #121214bf 100%)",
    height: '100%',
    display: 'flex',
    alignItems: 'center',

    '&:has(.arrow-right)': {
        background: "linear-gradient(90deg, #12121400 0%, #121214bf 100%)",
        right: 0,
    },

    '&:hover': {
        cursor: 'pointer',
    }
})