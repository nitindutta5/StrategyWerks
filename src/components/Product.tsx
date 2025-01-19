import { ProductType } from "../interface";

interface ProductProps {
  product: ProductType;
}

function Product({product}: ProductProps) {
  return (
    <div
      className="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow"
    >
      <img
        src={product.image}
        alt={product.title}
        className="h-40 w-full object-contain mb-4"
        loading={"lazy"}
      />
      <h2 className="text-lg font-semibold truncate">{product?.title}</h2>
      <p className="text-gray-700 mt-2">${product?.price?.toFixed(2)}</p>

      {/* Rating Section */}
      <div className="flex items-center mt-2">
        {/* Render stars based on the rating */}
        {Array.from({ length: 5 }, (_, index) => {
          const isFilled = product.rating.rate >= index + 1;
          const isHalf =
            product.rating.rate > index && product.rating.rate < index + 1;
          return (
            <svg
              key={index}
              className={`w-5 h-5 ${
                isFilled
                  ? "text-yellow-400"
                  : isHalf
                  ? "text-yellow-300"
                  : "text-gray-300"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 15l-3.13 1.65.84-4.91L3.3 7.36l4.93-.72L10 2l2.77 4.62 4.93.72-3.4 4.38.84 4.91L10 15z"
                clipRule="evenodd"
              />
            </svg>
          );
        })}
        <span className="ml-2 text-gray-600">
          ({product.rating.count} reviews)
        </span>
      </div>

      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        View Details
      </button>
    </div>
  );
}

export default Product;
