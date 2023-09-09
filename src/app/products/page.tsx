"use Client"

import BASE_PATH_FORAPI from "@/components/shared/Wrapper/BasePath";
import AllProductsCompo from "@/components/views/AllProduct";
import { useEffect, useState } from "react";

const Products = () => {
  const [productData, setProductData] = useState({ productArray: [] });

  useEffect(() => {
    const fetchAllProductData = async () => {
      try {
        const res = await fetch(`${BASE_PATH_FORAPI}/api/products?start=0&end=10`, {
          next: {
            revalidate: 120,
          },
        });
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setProductData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle the error gracefully, e.g., show an error message to the user.
        setProductData({ productArray: [] }); // Return an empty array or handle it as needed.
      }
    };

    fetchAllProductData();
  }, []);

  return <AllProductsCompo productArray={productData.productArray} />;
};

export default Products;
