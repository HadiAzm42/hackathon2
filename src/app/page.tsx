import Hero from "@/components/views/Hero";
import ProductsType from "@/components/views/ProductTypes";
// import { oneProductType, responseType } from "@/components/utils/ProductsDataArrayAndType";
// import ProductCarousel from "@/components/views/ProductCarousel";
// import BASE_PATH_FORAPI from "@/components/shared/Wrapper/BasePath";

export default function Home() {
  return (
    <div>
      <Hero />
      <ProductsType />
      {/* <ProductCarousel /> */}
    </div>
  );
}

// ProductData={response} 

// async function fetchAllProductsData() {
//   try {
//     let response = await fetch(`${BASE_PATH_FORAPI}/api/products`);
//     if (!response.ok) {
//       throw new Error('Failed to fetch data');
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('API request error:', error);
//     throw error;
//   }
  
// }

// export default async function Home() {
//   let {response} = await fetchAllProductsData();
// return (

// )
// }

