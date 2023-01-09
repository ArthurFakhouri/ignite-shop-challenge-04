import { keyframes, styled } from "../../../../styles";

const moveBagLeft = keyframes({
    '0%': { transform: 'translateX(100%)' },
    '100%': { transform: 'translateX(0%)' },
})

const moveBagRight = keyframes({
    '0%': { transform: 'translateX(0%)' },
    '100%': { transform: 'translateX(100%)' },
})

export const BagContainer = styled('div', {
    variants: {
        animationMove: {
            moveLeft: { animation: `${moveBagLeft} .3s both` },
            moveRight: { animation: `${moveBagRight} .3s both` },
            initialState: {},
        }
    },

    position: 'fixed',
    display: 'flex',
    gap: '2rem',
    flexDirection: 'column',
    width: 480,
    height: '100%',
    backgroundColor: '$gray800',
    top: 0,
    right: 0,
    padding: '4.5rem 3rem 3rem',
    transform: 'translateX(100%)',
})

export const Checkout = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 'auto',
    gap: '.5rem',

    '& > div': {
        display: 'flex',
        justifyContent: 'space-between',

        '&  > span:nth-child(2)': {
            fontSize: '$md',
        }
    },

    '& > div:nth-child(2)': {
        fontWeight: 'bold',
        fontSize: '$md',

        '&  > span:nth-child(2)': {
            fontSize: '$xl',
        }
    },

    button: {
        marginTop: '3.125rem',
        padding: '1.25rem 2rem',
        backgroundColor: '$green300',
        color: '$white',
        transition: '.4s background',
        border: 0,
        borderRadius: 8,

        fontSize: '$md',
        fontWeight: 'bold',
        lineHeight: 1.6,

        '&:hover': {
            cursor: 'pointer',
            backgroundColor: '$green500',
        }
    }
})

export const CloseBagButton = styled('button', {
    position: 'absolute',
    backgroundColor: 'transparent',
    lineHeight: 0,
    border: 0,
    color: '$gray600',
    top: 24,
    right: 24,

    '&:hover': {
        cursor: 'pointer',
    }
})