import { styled } from "..";

export const SuccessContainer = styled('main', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
    height: 656,

    h1: {
        fontSize: '$2xl',
        color: '$gray100',
        margin: '3rem 0 1.5rem',
    },

    p: {
        fontSize: '$xl',
        color: '$gray300',
        maxWidth: 560,
        textAlign: 'center',
        lineHeight: 1.4,
    },

    a: {
        marginTop: '5rem',
        display: 'block',
        fontSize: '$lg',
        fontWeight: 'bold',
        color: '$green500',
        textDecoration: 'none',
        transition: '.2s color',

        '&:hover': {
            color: '$green300',
        }
    }
})

export const Images = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 140,
})

export const ImageContainer = styled('div', {
    width: 140,
    height: 140,
    maxWidth: 140,
    margin: '0 -25px',
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    boxShadow: '0px 0px 60px rgba(0, 0, 0, 0.8)',
    borderRadius: '50%',
    padding: '.25rem',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    img: {
        objectFit: 'cover',
    }
})