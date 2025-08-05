import { Link } from '../components/link.jsx'

export default function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es una pagina de ejemplopara crear un router dese cero</p>
      <Link  to='/about'>Sobre nosotros</Link>
    </>
  )
}