import { ImageContainer, ProductContainer, ProductDetails } from '../../styles/pages/product'

import { GetStaticProps } from 'next'
import Image from 'next/image'
import Stripe from 'stripe'
import { stripe } from '../../lib/stripe'
import { useCart } from '../../contexts/CartContext'

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: string
    description: string
    defaultPriceId: string
    unitAmount: number
  }
}

export default function Product({ product }: ProductProps) {
  const { addToCart, isCartOpen } = useCart()

  function handleAddToCart() {
    addToCart({
      id: product.id,
      name: product.name,
      imageUrl: product.imageUrl,
      price: product.unitAmount,
      defaultPriceId: product.defaultPriceId,
    })
  }

  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={product.imageUrl} width={520} height={480} alt="" />
      </ImageContainer>
      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>
        <p>{product.description}</p>
        <button onClick={handleAddToCart}>Colocar na sacola</button>
      </ProductDetails>
    </ProductContainer>
  )
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params!.id
  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })
  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0] || '',
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount! / 100),
        description: product.description,
        defaultPriceId: price.id,
        unitAmount: price.unit_amount,
      },
    },
    revalidate: 60 * 60 * 1,
  }
}
