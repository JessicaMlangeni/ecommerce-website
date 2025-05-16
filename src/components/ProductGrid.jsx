import ProductCard from './ProductCard';
import products from '../redux/products'; 

const ProductGrid = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
    {products.map(product => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);

export default ProductGrid;
