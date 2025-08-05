import { Router } from "./Router.jsx"
import Search from "./pages/Search.jsx"
import HomePage from "./pages/home.jsx"
import AboutPage from "./pages/About.jsx"

const routes = [
  {
    path:'/',
    Component: HomePage
  },
  {
    path:'/about',
    Component: AboutPage
  },
  {
    path: '/search/:query',
    Component: Search
  }
]



function App() {

  return (
    <main>
      <Router routes={routes} />
    </main>
  )
}

export default App
