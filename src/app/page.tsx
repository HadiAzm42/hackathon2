import Hero from "@/components/views/Hero";
import ProductsType from "@/components/views/ProductTypes";
// import { oneProductType, responseType } from "@/components/utils/ProductsDataArrayAndType";
// import ProductCarousel from "@/components/views/ProductCarousel"
import BASE_PATH_FORAPI from "@/components/shared/Wrapper/BasePath";

async function fetchAllProductsData() {
  let res = await fetch(`${BASE_PATH_FORAPI}/api/products`);
  if(!res.ok) {
    throw new Error("Failed to fetch")
  }

  return res.json();
}

export default async function Home() {
  let response = await fetchAllProductsData();
  console.log("response :" , response)
  return (
    <div>
      <Hero />
      <ProductsType />
      {/* <ProductCarousel ProductData={response} /> */}
      </div>
  )
}