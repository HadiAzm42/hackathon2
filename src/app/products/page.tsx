import BASE_PATH_FORAPI from "@/components/shared/Wrapper/BasePath"
import AllProductsCompo from "@/components/views/AllProduct";

async function fetchAllProductData() {
    try {
        let res = await fetch(`${BASE_PATH_FORAPI}/api/products?start=0&end=10`, {
            next: {
                revalidate: 120
            }
        });
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }
        return res.json();
    } catch (error) {
        console.error("Error fetching data:", error);
        // Handle the error gracefully, e.g., show an error message to the user.
        return { productArray: [] }; // Return an empty array or handle it as needed.
    }
}

const Products = async () => {
    const ProductData = await fetchAllProductData()
    return (
<AllProductsCompo ProductData={ProductData} />
    )
}

export default Products