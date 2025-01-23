import { useState, useEffect, useMemo } from "react";
import Product from "./Product";
import { ProductType } from "../interface";
import { useSearchParams } from "react-router";

const ProductList = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState<ProductType[]>([]);
  const [page, setPage] = useState(1); // Current page
  const [limit] = useState(10); // Number of items per page
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  // Fetch products from the server
  const fetchProducts = async () => {
    if (loading) return;

    setLoading(true);
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products?limit=${limit}&page=${page}`
      );
      const data = await response.json();

      if (data.length > 0) {
        setProducts((prev) => [...prev, ...data]); // Append new products
        setPage((prev) => prev + 1); // Increment page number
      }
    } catch (err) {
      setError("Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

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
        (product) => product.rating.rate <= parseFloat(rating)
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

  // Initial fetch
  useEffect(() => {
    fetchProducts();
  }, []);

  // Infinite scroll handler
  const handleScroll = () => {
    const scrollPosition =
      window.innerHeight + document.documentElement.scrollTop;
    const threshold = document.documentElement.scrollHeight - 10;

    if (scrollPosition >= threshold) {
      fetchProducts();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page, loading]);

  // Loading state
  if (loading && products.length === 0) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {Array.from({ length: limit }).map((_, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 shadow animate-pulse bg-gray-100"
          >
            <div className="h-40 w-auto bg-gray-300 mb-4 rounded min-w-[260px]"></div>
            <div className="h-6 bg-gray-300 rounded w-full mb-2"></div>
            <div className="h-6 bg-gray-300 rounded w-3/4"></div>
          </div>
        ))}
      </div>
    );
  }

  // Error state
  if (error) {
    return <div className="text-left mt-8 text-red-500">{error}</div>;
  }

  // No products found state
  if (filteredProducts.length === 0 && !loading) {
    return (
      <div className="text-center mt-8 text-gray-500 col-span-full">
        <p className="w-full">No results found based on the applied filters.</p>
      </div>
    );
  }

  // Render products
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
      {filteredProducts.map((product, id) => (
        <Product key={id + "" + product.id} product={product} />
      ))}
      {/* Loading indicator for infinite scroll */}
      {loading && (
        <div className="text-center col-span-full mt-4 text-gray-500">
          Loading more products...
        </div>
      )}
    </div>
  );
};

export default ProductList;
