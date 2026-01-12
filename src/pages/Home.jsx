import { useState } from 'react'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

const Home = ({ addToCart }) => {
  const [filteredProducts, setFilteredProducts] = useState(products)

  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setFilteredProducts(products)
      return
    }
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredProducts(filtered)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome to ShopEasy</h1>
        <p className="text-gray-600">Find the best products at the best prices</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  )
}

export default Home