import './App.css'
import { useState } from 'react'
import { products as initialProducts } from './mocks/products.json'
import Products from './components/Products'
import Filters from './components/Filters'
import Cart from './components/Cart'
import { CartProvider } from './contexts/CartContext'
import Header from './components/Header'

function App() {
  const [products] = useState(initialProducts)
  const [filters, setFilters] = useState({
    category: 'all',
    price: 0
  })

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        (filters.category === 'all' || product.category === filters.category) &&
        (filters.price === 0 || product.price >= filters.price)
      )
    })
  }




  return (

    <CartProvider>
      <h1>TWM 2024-2</h1>
      <Header />
      <Cart />
      <Filters filters={filters} changeFilters={setFilters} />
      <Products products={filterProducts(products)} />
      <h1>LOL</h1>
      
    </CartProvider>
  )



  



}

export default App
