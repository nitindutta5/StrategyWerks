import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";

const Filters = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isFilterVisible, setIsFilterVisible] = useState(true);

  const handleFilterChange = (key: string, value: string) => {
    const updatedParams = new URLSearchParams(searchParams);

    if (value) {
      updatedParams.set(key, value);
    } else {
      updatedParams.delete(key);
    }

    navigate({ search: updatedParams.toString() });
  };

  return (
    <div className="relative">
      <div
        className={`lg:max-h-screen transition-all duration-300 ease-in-out overflow-auto border rounded-lg p-4 shadow-md bg-white text-left w-full sm:w-full`}
      >
        <h2 className="text-xl font-semibold mb-4">Filters</h2>

        {/* Category Filter */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Category</label>
          <select
            className="w-full border rounded px-3 py-2"
            value={searchParams.get("category") || ""}
            onChange={(e) => handleFilterChange("category", e.target.value)}
          >
            <option value="">All</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
          </select>
        </div>

        {/* Price Range Filter */}
        <div className="mb-4">
  <label className="block text-sm font-medium mb-2">Max Price</label>

  <input
    type="range"
    min="20"
    max="1000"  // Set the max price range according to your need
    step="1"    // Step value to increase/decrease by 1
    value={searchParams.get("maxPrice") || 1000}  // Default to max value if no value exists
    onChange={(e) => handleFilterChange("maxPrice", e.target.value)}
    className="w-full"
  />

  <div className="flex justify-between mt-2">
    <span className="text-sm text-gray-600">20$</span>
    <span className="text-sm text-gray-600">{searchParams.get("maxPrice") || 1000}$</span>
  </div>
</div>

        {/* Rating Filter */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Minimum Rating</label>
          <select
            className="w-full border rounded px-3 py-2"
            value={searchParams.get("rating") || ""}
            onChange={(e) => handleFilterChange("rating", e.target.value)}
          >
            <option value="">All</option>
            <option value="1">Upto 1</option>
            <option value="2">Upto 2</option>
            <option value="3">Upto 3</option>
            <option value="4">Upto 4</option>
            <option value="5">Upto 5</option>
          </select>
        </div>

        {/* Sorting */}
        <div>
          <label className="block text-sm font-medium mb-2">Sort By</label>
          <select
            className="w-full border rounded px-3 py-2"
            value={searchParams.get("sort") || ""}
            onChange={(e) => handleFilterChange("sort", e.target.value)}
          >
            <option value="">None</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
