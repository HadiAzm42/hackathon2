"use client"

import { imagesType, oneProductType } from "@/components/utils/ProductsDataArrayAndType"
import { FC } from "react"
import { client } from "../../../../sanity/lib/client";
import { SanityClient } from "sanity";
import Image from "next/image"
import imageUrlBuilder from '@sanity/image-url'; // Corrected import statement

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source)
}

const ProductDetail: FC<{ item: oneProductType }> = ({ item }) => {
  return (
    <div>
      <div>
        <div>
          {
            item.image.map((item: imagesType, index: number) => (
              <div className="w-28" key={index}>
                <Image width={1000} height={1000} alt={item.alt} src={urlFor(item).width(1000).height(1000).url()} />
              </div>
            ))
          }
        </div>
        <div></div>
      </div>
      <div></div>
    </div>
  )
}

export default ProductDetail;
