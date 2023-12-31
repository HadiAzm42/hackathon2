"use client"
import BASE_PATH_FORAPI from "@/components/shared/Wrapper/BasePath";
import { oneProductType } from "@/components/utils/ProductsDataArrayAndType"
import { Component } from "react"
import InfiniteScroll from "react-infinite-scroll-component";
import CardAll from "../CardAll";

interface propsType {
    productArray: Array<oneProductType>
}

export default class AllProductsCompo extends Component<{ ProdutcData: propsType }> {
    start: number = 0;
    end: number = 10;
    state: { items: Array<oneProductType>, hasMore: boolean } = {
        items: [...this.props.ProdutcData.productArray],
        hasMore: true,
    }
    
    fetchDataFromApiGradually = async (start: number, end: number) => {
        const res = await fetch(`${BASE_PATH_FORAPI}/api/products?start=${start}&end=${end}`);
        return res.json();
      }
    getData = async () => {
      let allTogether = await this.fetchDataFromApiGradually(this.start, this.end);
      console.log(allTogether)
      // this.setState({
      //   items:this.state.items.concat
      // })
    }
    render() {
        return (
          <div onClick={this.getData}>
            <InfiniteScroll
                dataLength={this.state.items.length}
                next={this.getData}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
                // className="content-center justify-center grid grid-cols-2 md:grid-cols-3 py-10 lg:grid-cols-4 gap-4"
            >
                {/* {this.state.items.map((item: oneProductType, index: number) => (
                    <CardAll key={index} singleProductData={item} />
                ))} */}
            </InfiniteScroll>
            </div>
        )
    };
}