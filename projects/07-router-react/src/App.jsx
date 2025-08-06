import { lazy, Suspense } from "react"

import { Router } from "./components/Router.jsx"
import { Route } from "./components/Route.jsx"

const LazyPage404 = lazy(() => import('./pages/Page404.jsx'))
const LazySearch = lazy(() => import('./pages/Search.jsx'))
const LazyHomePage = lazy(() => import('./pages/home.jsx'))
const LazyAboutPage = lazy(() => import('./pages/about.jsx'))


function App() {

  return (
    <main>
      <Suspense fallback={null} >
        <Router defaultComponent={LazyPage404} >
          <Route path='/' Component={LazyHomePage} />
          <Route path='/About' Component={LazyAboutPage} />
          <Route path='/search/:query' Component={LazySearch} />
        </Router >
      </Suspense >
    </main>
  )
}

export default App