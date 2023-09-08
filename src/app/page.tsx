import Hero from "@/components/views/Hero";
import ProductsType from "@/components/views/ProductTypes";
import ProductCarousel from "@/components/views/ProductCarousel";
import BASE_PATH_FORAPI from "@/components/shared/Wrapper/BasePath";
import Jewellery from "@/components/views/Jewellery";
import NewsLetter from "@/components/views/NewsLetter";
import Footer from "@/components/views/Footer";

async function fetchAllProductsData() {
  let res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-09-07/data/query/production?query=*[_type == "products"]`);
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  return res.json();
}

export default async function Home() {
  let  {result}  = await fetchAllProductsData();
  return (
    <div>
       <Hero />
      <ProductsType /> 
      <ProductCarousel ProductData={result}  />
      <Jewellery />
      <NewsLetter />
    </div>
  );
}
