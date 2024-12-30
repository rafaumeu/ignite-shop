import Link from 'next/link'
import { ImageContainer, SuccessContainer } from '../styles/pages/success'

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compra efetuada!</h1>
      <ImageContainer></ImageContainer>
      <p>Uhuul <strong>Rafael Dias</strong>, sua <strong>Camiseta Maratona Ignite 2.0
      </strong> já está a caminho da sua casa.</p>
      <Link href="/">Voltar ao catálogo</Link>
    </SuccessContainer>
  );
}