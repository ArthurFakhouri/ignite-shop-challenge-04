import { styled } from "..";


export const HomeContainer = styled('main', {
    display: 'flex',
    position: 'relative',
    width: '100%',
    marginLeft: 'auto',
    maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
    minHeight: 656,
});

export const Product = styled('div', {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    cursor: 'pointer',
    position: 'relative',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',

    img: {
        width: 'auto',
        height: 'auto',
        objectFit: 'cover'
    },

    footer: {
        position: 'absolute',
        bottom: '.25rem',
        left: '.25rem',
        right: '.25rem',
        padding: '2rem',

        borderRadius: 6,

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        backgroundColor: 'rgba(0, 0, 0, .6)',
        transform: 'translateY(110%)',
        opacity: 0,
        transition: '.5s all ease-in-out',
    },

    '&:hover': {
        footer: {
            transform: 'translateY(0%)',
            opacity: 1,
        }
    }
})

export const Details = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    strong: {
        fontSize: '$lg',
        color: '$gray100'
    },

    span: {
        fontSize: '$xl',
        fontWeight: 'bold',
        color: '$green500',
    }
})

export const AddToHandbag = styled('button', {
    display: 'flex',
    padding: '.75rem',
    border: 0,
    borderRadius: 6,
    backgroundColor: '$green300',
    color: '$white',
    transition: '.4s background',

    '&:hover': {
        cursor: 'pointer',
        backgroundColor: '$green500',
    }
})