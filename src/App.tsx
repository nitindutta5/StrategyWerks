import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/Products";
import Filters from "./components/Filters";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => {
  return (
    <Router>
      <ErrorBoundary>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center mb-8">E-Commerce</h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Fixed Filters Section */}
            <div className="col-span-1">
              <Filters />
            </div>
            {/* Product List Section */}
            <div className="col-span-3">
              <Routes>
                <Route path="/" element={<ProductList />} />
                {/* Add additional routes for different product categories or filtering if needed */}
              </Routes>
            </div>
          </div>
        </div>
      </ErrorBoundary>
    </Router>
  );
};

export default App;
