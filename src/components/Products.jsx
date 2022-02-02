import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Products() {
  const [products, setProducts] = useState();

  const getProducts = async () => {
    const baseURL = "https://my-store545.herokuapp.com/products";
    const response = await axios.get(baseURL);
    if (response) {
       setProducts(response.data);
    }
    return;
  };
  
  useEffect(() => {
    getProducts();
  },[0]);
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900"></h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {/* {products && products  ? ( */}
          {products &&
            products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={product.coverPhoto}
                    alt={product.coverPhoto}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href="/">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    ${product.price}
                  </p>
                </div>
              </div>
            ))}
          {/* ) : (
            <div className="w-full h-full overflow-hidden fixed  flex justify-center items-center">
              <div class=" p-8 text-center border border-gray-200 rounded-lg">
                <h2 class="text-2xl font-medium">There's nothing here...</h2>

                <Link
                  to="/dashboard/add"
                  class="inline-flex items-center px-5 py-3 mt-8 font-medium text-white bg-indigo-500 rounded-lg hover:bg-indigo-600"
                >
                  Add Product
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="flex-shrink-0 w-4 h-4 ml-3"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
}
