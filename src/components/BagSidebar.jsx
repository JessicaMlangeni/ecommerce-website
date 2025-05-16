import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';

const BagSidebar = () => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="p-4 border-l bg-gray-50 min-w-[200px]">
      <h2 className="text-xl font-bold mb-4">Bag</h2>
      <div className="space-y-2">
        {cart.map(item => (
          <div key={item.id} className="flex justify-between items-center">
            <img src={item.image} alt={item.name} className="w-10 h-10 object-cover" />
            <button onClick={() => dispatch(removeFromCart(item.id))}>❌</button>
          </div>
        ))}
      </div>
      <button className="mt-4 bg-black text-white px-4 py-2 rounded">View Bag</button>
    </div>
  );
};

export default BagSidebar;