import { useState, useEffect, useRef } from 'react'

export function useSearch () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstRender = useRef(true)

  useEffect(() => {
    if(isFirstRender.current) {
      isFirstRender.current = search === ''
      return
    }

    if (search === ''){
      setError('No se puede buscar una pelicula vacía')
    return
  }

    if(search.match(/^\d+$/)) {
    setError('No se puede buscar una pelicula con números ')
    return
    }

    if(search.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }

    setError(null)
  }, [search])

  return { search, updateSearch, error }
}