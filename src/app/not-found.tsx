import Link from "next/link"

const NotFound = () => {
  return (
    <div>
      <h2>Página não encontrada!</h2>
      <p>Desculpe, a página que você tentou acessar não existe.</p>
      <Link href="/">Voltar para a página inicial</Link>
    </div>
  )
}
export default NotFound