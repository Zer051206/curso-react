import { useState } from "react"
import { FiltersContext } from "./filtersContext.jsx"

// ? 2. Crear el provider, para proveer el contexto
// ! ESTE ES EL QUE NOS PROVEE EL ACCESO A LOS DATOS
export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })
  return ( 
    <FiltersContext.Provider value={{
      filters,
      setFilters
    }}
    > 
      {children}
    </FiltersContext.Provider>
  )
}