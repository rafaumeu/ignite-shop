import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const CartButton = styled('button', {
  background: 'none',
  border: 'none',
  color: '$gray300',
  cursor: 'pointer',
  position: 'relative',
  padding: '0.75rem',
  borderRadius: 6,
  '&:hover': {
    color: '$gray100',
    background: 'rgba(255,255,255,0.05)',
  },
})

export const CartItemCount = styled('span', {
  position: 'absolute',
  top: 4,
  right: 4,
  background: '$green500',
  color: '$white',
  borderRadius: '50%',
  width: 20,
  height: 20,
  fontSize: 12,
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})
