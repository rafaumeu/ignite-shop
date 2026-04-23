import { styled, keyframes } from '..'

const slideIn = keyframes({
  from: { transform: 'translateX(100%)' },
  to: { transform: 'translateX(0)' },
})

export const CartOverlay = styled('div', {
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  zIndex: 1000,
})

export const CartSidebarContainer = styled('aside', {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  width: 480,
  maxWidth: '100vw',
  backgroundColor: '$gray800',
  padding: '2rem',
  display: 'flex',
  flexDirection: 'column',
  zIndex: 1001,
  animation: `${slideIn} 0.3s ease-in-out`,
})

export const CartHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '2rem',
  h2: {
    fontSize: '$xl',
    color: '$gray100',
    fontWeight: 'bold',
  },
})

export const CloseButton = styled('button', {
  background: 'none',
  border: 'none',
  color: '$gray300',
  cursor: 'pointer',
  fontSize: '$xl',
  lineHeight: 1,
  '&:hover': {
    color: '$gray100',
  },
})

export const CartItemsContainer = styled('div', {
  flex: 1,
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
})

export const CartItemContainer = styled('div', {
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
})

export const CartItemImage = styled('div', {
  width: 80,
  height: 80,
  borderRadius: 6,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  flexShrink: 0,
  img: {
    objectFit: 'cover',
  },
})

export const CartItemInfo = styled('div', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',
  span: {
    fontSize: '$md',
    color: '$gray300',
  },
  strong: {
    fontSize: '$md',
    color: '$green300',
  },
})

export const QuantityControls = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  marginTop: '0.5rem',
  button: {
    background: '$gray900',
    border: 'none',
    color: '$gray100',
    width: 28,
    height: 28,
    borderRadius: 4,
    cursor: 'pointer',
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      background: '$green500',
    },
  },
  'span': {
    color: '$gray100',
    width: 20,
    textAlign: 'center',
    fontSize: '1rem',
  },
})

export const RemoveButton = styled('button', {
  background: 'none',
  border: 'none',
  color: '$gray300',
  cursor: 'pointer',
  padding: '0.25rem',
  lineHeight: 1,
  '&:hover': {
    color: '#ff4444',
  },
})

export const CartFooter = styled('div', {
  borderTop: '1px solid $gray900',
  paddingTop: '2rem',
  marginTop: '1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
})

export const CartSummaryRow = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  span: {
    fontSize: '$md',
    color: '$gray300',
  },
  strong: {
    fontSize: '$xl',
    color: '$gray100',
  },
})

export const CheckoutButton = styled('button', {
  background: '$green500',
  border: 0,
  borderRadius: 8,
  padding: '1.25rem',
  color: '$gray100',
  fontWeight: 'bold',
  fontSize: '$md',
  cursor: 'pointer',
  width: '100%',
  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },
  '&:not(:disabled):hover': {
    background: '$green300',
  },
})

export const EmptyCart = styled('p', {
  textAlign: 'center',
  color: '$gray300',
  fontSize: '$md',
  padding: '4rem 0',
})
