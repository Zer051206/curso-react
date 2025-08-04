import { useEffect, useState } from "react"

const NAVIGATION_EVENT = 'pushstate'

function navigate (href) {
  window.history.pushState({}, '', href)

  const navigationEvent = new Event(NAVIGATION_EVENT)

  window.dispatchEvent(navigationEvent)
}

function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es una pagina de ejemplopara crear un router dese cero</p>
      <button onClick={() => navigate('/about')} >Sobre nosotros</button>
    </>
  )
}

function AboutPage () {
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
      <button onClick={() => navigate('/')}>Volver a la Home</button>
    </>
    )
}

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(NAVIGATION_EVENT, onLocationChange)

    return () => {
      window.removeEventListener(NAVIGATION_EVENT, onLocationChange)
    }
  }, [])

  return (
    <main>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </main>
  )
}

export default App
