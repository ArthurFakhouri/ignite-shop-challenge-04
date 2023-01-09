import { styled } from "../../styles";

export const HeaderContainer = styled('header', {
    padding: '2rem 0',
    width: '100%',
    maxWidth: 1180,
    margin: '0 auto',

    display: 'flex',
    justifyContent: 'space-between',
})

export const HandbagButton = styled('button', {
    backgroundColor: '$gray800',
    color: '$gray300',
    borderRadius: 6,
    border: 'none',
    padding: '.875rem',
    transition: '.4s all',
    position: 'relative',
    lineHeight: 0,

    '&:hover': {
        cursor: 'pointer',
        backgroundColor: '$gray700'
    }
})

export const Amount = styled('span', {
    position: 'absolute',
    width: 28,
    height: 28,
    top: -7,
    right: -7,
    border: 'solid 3px $gray900',
    borderRadius: '50%',
    backgroundColor: '$green500',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    color: '$white',
    fontWeight: 'bold',
    fontSize: '$sm',
})