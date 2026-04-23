import { useCart } from '../contexts/CartContext'
import Image from 'next/image'
import axios from 'axios'
import { useState } from 'react'
import {
  CartOverlay,
  CartSidebarContainer,
  CartHeader,
  CloseButton,
  CartItemsContainer,
  CartItemContainer,
  CartItemImage,
  CartItemInfo,
  QuantityControls,
  RemoveButton,
  CartFooter,
  CartSummaryRow,
  CheckoutButton,
  EmptyCart,
} from '../styles/components/cart'

function formatPrice(priceInCents: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(priceInCents / 100)
}

export function CartSidebar() {
  const {
    items,
    removeFromCart,
    changeItemQuantity,
    totalItems,
    totalPrice,
    isCartOpen,
    closeCart,
  } = useCart()

  const [isCreatingCheckout, setIsCreatingCheckout] = useState(false)

  async function handleCheckout() {
    try {
      setIsCreatingCheckout(true)
      const lineItems = items.map(item => ({
        priceId: item.defaultPriceId,
        quantity: item.quantity,
      }))
      const response = await axios.post('/api/checkout', { items: lineItems })
      const { checkoutUrl } = response.data
      window.location.href = checkoutUrl
    } catch {
      setIsCreatingCheckout(false)
      alert('Falha ao redirecionar ao checkout')
    }
  }

  if (!isCartOpen) return null

  return (
    <>
      <CartOverlay onClick={closeCart} />
      <CartSidebarContainer>
        <CartHeader>
          <h2>Sacola de compras</h2>
          <CloseButton onClick={closeCart}>✕</CloseButton>
        </CartHeader>

        <CartItemsContainer>
          {items.length === 0 ? (
            <EmptyCart>Sua sacola está vazia</EmptyCart>
          ) : (
            items.map(item => (
              <CartItemContainer key={item.id}>
                <CartItemImage>
                  <Image
                    src={item.imageUrl}
                    width={70}
                    height={70}
                    alt={item.name}
                  />
                </CartItemImage>
                <CartItemInfo>
                  <span>{item.name}</span>
                  <strong>{formatPrice(item.price)}</strong>
                  <QuantityControls>
                    <button
                      onClick={() =>
                        changeItemQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        changeItemQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </QuantityControls>
                </CartItemInfo>
                <RemoveButton onClick={() => removeFromCart(item.id)}>
                  ✕
                </RemoveButton>
              </CartItemContainer>
            ))
          )}
        </CartItemsContainer>

        {items.length > 0 && (
          <CartFooter>
            <CartSummaryRow>
              <span>Quantidade</span>
              <span>
                {totalItems} {totalItems === 1 ? 'item' : 'itens'}
              </span>
            </CartSummaryRow>
            <CartSummaryRow>
              <strong>Valor total</strong>
              <strong>{formatPrice(totalPrice)}</strong>
            </CartSummaryRow>
            <CheckoutButton
              disabled={isCreatingCheckout}
              onClick={handleCheckout}
            >
              Finalizar compra
            </CheckoutButton>
          </CartFooter>
        )}
      </CartSidebarContainer>
    </>
  )
}
