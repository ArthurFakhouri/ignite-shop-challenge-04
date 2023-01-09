import { styled } from "../../../../styles";

export const ItemsContainer = styled('ul', {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    paddingRight: '1rem',
    overflowY: 'overlay',
    listStyle: 'none',
    height: '100%',
    maxHeight: '30.5rem',


    '&::-webkit-scrollbar': {
        width: 5,
    },

    '&::-webkit-scrollbar-track': {
        backgroundColor: '$gray900',
        borderRadius: 4,
    },
    '&::-webkit-scrollbar-thumb': {
        background: '$gray700',
        borderRadius: 4,
    },
})

export const ImageContainer = styled('div', {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    width: 110,
})

export const Item = styled('li', {
    display: 'flex',
    gap: '1.25rem',
})

export const Details = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,

    '& > span': {
        fontSize: '$md',
        color: '$gray300'
    },

    '& > strong': {
        fontSize: '$md',
        lineHeight: 1.6,
        fontWeight: 'bold',
    },
})