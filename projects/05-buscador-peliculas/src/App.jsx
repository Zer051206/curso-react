import './App.css'
import { useCallback } from 'react'
import { useState } from 'react'
import { Movies } from './components/movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import debounce from 'just-debounce-it'

function App() {
  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({ search, sort }) 

    // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedGetMovies = useCallback(
  debounce((search) => {
    console.log('search', search)
    getMovies({ search })
  }, 400)
  , [getMovies]
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    debouncedGetMovies(newSearch)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} name='query' placeholder='Avengers, Star wars, The Matrix... ' autoComplete='off' />
          <input type='checkbox' onChange={handleSort} checked={sort}/>
          <button type='submit'>Search movie</button>
        </form>
        {error && <p  style={{ color: 'red'}}>{error}</p>}
      </header>

      <main>
        {
          loading ? <p>Cargando...</p> : <Movies movies={movies} />
        }
      </main>
    </div>
  )
}

export default App
