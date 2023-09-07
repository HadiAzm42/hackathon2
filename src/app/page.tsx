import Hero from "@/components/views/Hero";
import ProductsType from "@/components/views/ProductTypes";
import { oneProductType, responseType } from "@/components/utils/ProductsDataArrayAndType";
import ProductCarousel from "@/components/views/ProductCarousel"
import BASE_PATH_FORAPI from "@/components/shared/Wrapper/BasePath";

async function fetchAllProductsData() {
  // let res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == "products"]`, {
  //   next: {
  //     revalidate: 60
  //   }
  // });

  // if (!res.ok) {
  //   throw new Error("Failed to fetch")
  // }

  // return res.json();
  return {response: "Hi"}
}

export default async function Home() {
  let { response } = await fetchAllProductsData();
  return (
    <div>
      <Hero />
      <ProductsType />
      <ProductCarousel ProductData={response} />
      </div>
  )
}