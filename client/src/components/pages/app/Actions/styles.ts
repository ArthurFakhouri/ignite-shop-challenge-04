import { styled } from "../../../../styles"

export const ActionsContainer = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: 'auto',

    '& > button': {
        display: 'flex',
        gap: '.25rem',
        alignItems: 'center',
        background: 'transparent',
        color: '$gray300',
        border: 0,
        cursor: 'pointer',

        '& > svg': {
            color: '$red',
        }
    }
})