import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Product from "./Product";
import { ProductType } from "../interface";

const ProductList = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch products");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];
    const category = searchParams.get("category");
    const maxPrice = searchParams.get("maxPrice");
    const rating = searchParams.get("rating");
    const sort = searchParams.get("sort");

    // Apply filters
    if (category) {
      filtered = filtered.filter((product) => product.category === category);
    }

    if (maxPrice) {
      filtered = filtered.filter(
        (product) => product.price <= parseFloat(maxPrice)
      );
    }

    if (rating) {
      filtered = filtered.filter(
        (product) => product.rating.rate >= parseFloat(rating)
      );
    }

    // Apply sorting
    if (sort === "price-asc") {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (sort === "price-desc") {
      filtered = filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [products, searchParams]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 shadow animate-pulse bg-gray-100 "
          >
            <div className="h-40 w-auto bg-gray-300 mb-4 rounded min-w-[260px]"></div>
            <div className="h-6 bg-gray-300 rounded w-full mb-2"></div>
            <div className="h-6 bg-gray-300 rounded w-3/4"></div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return <div className="text-center mt-8 text-red-500">{error}</div>;
  }

  if (filteredProducts.length === 0) {
    return (
      <div className="text-center mt-8 text-gray-500">
        <p>No results found based on the applied filters.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
      {filteredProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
