import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
      <img src={product.image} alt={product.name} className="h-40 mx-auto" />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-sm text-gray-500">{product.description}</p>
      <p className="font-bold mt-2">${product.price}</p>
      <button
        onClick={() => dispatch(addToCart(product))}
        className="bg-black text-white mt-2 px-4 py-1 rounded flex items-center gap-2"
      >
        🛒 Add
      </button>
    </div>
  );
};

export default ProductCard;
