import { styled } from "../../../../styles";

export const CountContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '$gray700',
    borderRadius: 6,
    padding: '.25rem',

    '& > input': {
        width: 24,
        outline: 0,
        background: 'transparent',
        border: 0,
        color: '$gray300',
        fontSize: '$sm',
        margin: '0 .25rem',
        textAlign: 'center',
    },

    '& > button': {
        lineHeight: 0,
        background: 'transparent',
        border: 0,
        color: '$green500',
        cursor: 'pointer',
    }
})