
import BASE_PATH_FORAPI from "@/components/shared/Wrapper/BasePath";
import { oneProductType ,  responseType } from "@/components/utils/ProductsDataArrayAndType";
import ProductDetail from "@/components/views/ProductDetail";
import ContextWrapper from "@/global/Context";
import {FC} from "react"
import {Metadata} from 'next'

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const slug = params.slug;

    const productResponse = await fetch(`https://v7cu2eka.api.sanity.io/v2023-09-07/data/query/production?query=*[_type=='products]`).then((res: any) => res.json());
    console.log("Product Response:", productResponse);
    const titleToSet: oneProductType = productResponse.result.find((item: oneProductType) => item.slug.current == slug);
    console.log("Title To Set:", titleToSet);
    
}



async function fetchPreviewData(slug:string) {
    let res = await fetch(`https://v7cu2eka.api.sanity.io/v2023-09-07/data/query/production?query=*%5B_type+%3D%3D+%27products%27+%26%26+slug.current+%3D%3D+%22${slug}%22%5D%0A`,);
  
    return res.json();
  }
  

  
export async function generateStaticParams() {
    let res = await fetch(`https://v7cu2eka.api.sanity.io/v2023-09-07/data/query/production?query=*[_type=='products']`).then((res:any) => res.json());

   
    console.log("res :", res)
    return res.result.map((item:oneProductType) => { slug: item.slug })
    
}

const Catalog = async({params}:{params: {slug:string}} ) => {
    let data: responseType= await fetchPreviewData(params.slug)
    return (
        <ContextWrapper>
        <ProductDetail item={data.result[0]} />
        </ContextWrapper>
    )
}

export default Catalog