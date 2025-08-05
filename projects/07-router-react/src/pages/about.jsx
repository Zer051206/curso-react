import { Link } from '../components/link.jsx'

export default function AboutPage () {
  return (
    <>
      <h1>About</h1>
      <div>
        <p>¡Hola! Me llamo Miguel Muñoz y estoy creando un clon de React Router.</p>
        <img
        src="https://avatars.githubusercontent.com/u/202011761?size=200"
        alt="Portrait of Miguel Muñoz smiling in a well-lit indoor setting with a neutral background. The mood is friendly and welcoming." 
        />
      </div>
      <Link to='/'>Volver a la Home</Link>
    </>
    )
}