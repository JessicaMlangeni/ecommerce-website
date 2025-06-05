
import ProductGrid from './components/ProductGrid';
import BagSidebar from './components/BagSidebar';
/*import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';*/

function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 overflow-y-auto">
        {/* Optional Navbar/Search */}
        <ProductGrid />
      </div>
      <BagSidebar />
    </div>
  );
}

export default App;
