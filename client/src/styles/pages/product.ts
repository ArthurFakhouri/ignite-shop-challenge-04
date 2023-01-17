import { styled } from "..";

export const ProductContainer = styled('main', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'stretch', //stretch faz com que as mesmas colunas tenham o msm tamanho verticalmente
    gap: '4rem',

    '@media only screen and (max-width: 768px) ': {
        flexWrap: 'wrap'
    },

    maxWidth: 1180,
    margin: '0 auto',
})

export const ImageContainer = styled('div', {
    width: '100%',
    maxWidth: 576,
    height: 'calc(656px - .5rem)',
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    padding: '.25rem ',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    img: {
        maxWidth: '100%',
        height: 'auto',
        objectFit: 'cover',
    }
})

export const ProductDetails = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    h1: {
        fontSize: '$2xl',
        color: '$gray300',
    },

    span: {
        marginTop: '1rem',
        display: 'block',
        fontSize: '$2xl',
        color: '$green500',
    },

    p: {
        marginTop: '2.5rem',
        fontSize: '$md',
        lineHeight: 1.6,
        color: '$gray300',
    },

    button: {
        marginTop: 'auto',
        backgroundColor: '$green300',
        border: 0,
        color: '$white',
        borderRadius: 8,
        padding: '1.25rem',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '$md',
        transition: '.4s background',

        '&:disabled': {
            opacity: .7,
            cursor: 'not-allowed',
        },

        '&:not(:disabled):hover': {
            backgroundColor: '$green500',
        }
    },
})