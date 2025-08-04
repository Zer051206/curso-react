import { products } from "./mocks/products.json"
import { Products } from "./components/products"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { useFilters } from "./hooks/useFilters"
import { Cart } from "./components/Cart"
import { CartProvider } from "./context/cartProvider"

function App() {
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(products) 

  return (
    <CartProvider>
    <Header />
    <Cart />
    <Products products={filteredProducts} />
    <Footer />
    </CartProvider>
  )
}

export default App
