import React from "react";
import Link from "next/link";
import Product from "../Homepage/Product";
import Factor from "../Homepage/Factor";
// const products = [
//   { id: 1, name: "Product 1", content: "Product 1 content" },
//   { id: 2, name: "Product 2", content: "Product 2 content" },
//   { id: 3, name: "Product 3", content: "Product 3 content" },
//   // Add more products as needed
// ];

function AllProduct() {
  return (
    <>
      <div className="px-10 2xl:px-80 xsm:px-5 sm:px-5">
        <div className="pb-10">
          <div>
            {/* {products.map((product, index) => (
              <div key={index}>
                <p>{product.name}</p>
                <Link legacyBehavior href={`/products/${product.id}`}>
                  <a className="text-blue-500 mt-4">View Details</a>
                </Link>
              </div>
            ))} */}
            <Product />
          </div>
        </div>
        <Factor />
      </div>
    </>
  );
}

export default AllProduct;
