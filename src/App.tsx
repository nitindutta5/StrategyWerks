import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/Products";
import Filters from "./components/Filters";

const App = () => {
  return (
    <Router>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">E-Commerce</h1>
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Fixed Filters Section */}
          <div className="lg:w-1/4">
            <Filters />
          </div>
          {/* Product List Section */}
          <div className="lg:w-3/4">
            <Routes>
              <Route path="/" element={<ProductList />} />
              {/* Add additional routes for different product categories or filtering if needed */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
