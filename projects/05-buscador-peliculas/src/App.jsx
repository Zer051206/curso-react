import { useState, useEffect, useRef } from 'react'
import { Movies } from './components/movies'
import { useMovies } from './hooks/useMovies'
import './App.css'

function App() {
  const { movies } = useMovies() 
  const inputRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    const fields = new FormData(event.target)
    const query = fields.get('query')
    console.log(query)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input name='query' ref={inputRef} placeholder='Avengers, Star wars, The Matrix... ' />
          <button type='submit'>Search movie</button>
        </form>
      </header>

      <main>
          <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
