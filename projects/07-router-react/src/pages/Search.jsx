import { useEffect } from "react"

export default function Search ({ routeParams }) {
  useEffect(() => {
    document.title = `You Search ${routeParams.query}`
  }, [] ) 

  return (
  <h1>You Search: {routeParams.query}</h1>
  )
}