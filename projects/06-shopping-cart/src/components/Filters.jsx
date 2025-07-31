import './Filters.css'
import { useState, useId } from 'react'

export function Filters ({ onChange }) {
  const [minPrice, setMinprice] = useState(0)
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangePrice = (event) => {
    setMinprice(event.target.value)
    onChange(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    onChange(prevState => ({
      ...prevState,
      category: event.target.value
    }))}

  return (
    <section className="filters">
      
      <div>
        <label htmlFor={minPriceFilterId}>Price</label>
        <input 
          type='range'
          id={minPriceFilterId}
          min='0'
          max='1000'
          onChange={handleChangePrice}
        />
        <span>{minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value='all'>All</option>
          <option value='laptops'>Laptops</option>
          <option value='groceries'>Groceries</option>
          <option value='smartphones'>smartphones</option>
        </select>
      </div>
    </section>
  )
}