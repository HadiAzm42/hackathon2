import { FC } from "react";
import Card from "../Card";
import { oneProductType } from "@/components/utils/ProductsDataArrayAndType"; // Make sure to import the correct type

const ProductCarousel = ({ ProductData }: any) => {
    return (
        <div>{ProductData[0].productName}</div>
    )
};

export default ProductCarousel;

// : FC<{ ProductData: oneProductType[] }> 