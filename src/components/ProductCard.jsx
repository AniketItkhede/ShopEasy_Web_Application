import { Link } from 'react-router-dom'

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link to={`/product/${product.id}`}>
        <div className="h-48 bg-gray-100 flex items-center justify-center">
          <img src={product.image} alt={product.name} className="h-full object-contain" />
        </div>
      </Link>
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-800 mb-1 hover:text-orange-600">{product.name}</h3>
        </Link>
        <p className="text-gray-600 text-sm mb-2">{product.category}</p>
        <div className="flex items-center justify-between">
          <span className="text-orange-600 font-bold">${product.price.toFixed(2)}</span>
          <button
            onClick={() => addToCart(product)}
            className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-full text-sm transition-colors duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard