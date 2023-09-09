import BASE_PATH_FORAPI from "@/components/shared/Wrapper/BasePath";
import { oneProductType } from "@/components/utils/ProductsDataArrayAndType";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import CardAll from "../CardAll";

interface Props {
  productArray: oneProductType[];
}

const AllProductsCompo = ({ productArray }: Props) => {
  const [items, setItems] = useState(productArray);
  const [hasMore, setHasMore] = useState(true);
  const [start, setStart] = useState(10);
  const [end, setEnd] = useState(20);

  const fetchDataFromApiGradually = async (start: number, end: number) => {
    const res = await fetch(`${BASE_PATH_FORAPI}/api/products?start=${start}&end=${end}`);
    const dataToCheckAndSend = await res.json();
    if (dataToCheckAndSend.productArray === "Not found") {
      setHasMore(false);
    }
    return dataToCheckAndSend;
  };

  const getData = async () => {
    let allTogether = await fetchDataFromApiGradually(start, end);
    if (allTogether.productArray !== "Not found") {
      setItems((prevItems) => [...prevItems, ...allTogether.productArray]);
    } else {
      setHasMore(false);
    }
    setStart((prevStart) => prevStart + 10);
    setEnd((prevEnd) => prevEnd + 10);
  };

  return (
    <InfiniteScroll
      dataLength={items.length}
      next={getData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
      className="content-center justify-center grid grid-cols-2 md:grid-cols-3 py-10 lg:grid-cols-4 gap-4"
    >
      {items.map((item: oneProductType, index: number) => (
        <CardAll key={index} singleProductData={item} />
      ))}
    </InfiniteScroll>
  );
};

export default AllProductsCompo;
