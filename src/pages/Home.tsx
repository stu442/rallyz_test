import { useRecoilState } from "recoil"
import Header from "../components/Header/Header"
import { ProdcutWrapper, Wrapper } from "./style"
import { productState } from "../atoms/productState"
import { Product, Products } from "../types/productType"
import ProductCard from "../components/ProductCard/ProductCard"
import { useEffect } from "react"

export default function Home() {
    const [products, setProducts] = useRecoilState<Products>(productState)

    useEffect(() => {
        fetch("https://dummyjson.com/products")
        .then(res => res.json())
        .then(data => setProducts(data))
        .catch(err => console.log(err))
    }, [setProducts])

    return (
        <Wrapper>
            <Header />
            <ProdcutWrapper>
                {products.products.map((product: Product) => (
                    <ProductCard
                    key={product.id}
                    title={product.title}
                    id={product.id}
                    image={product.thumbnail}
                    brand={product.brand}
                    price={product.price}
                    />
                ))}
            </ProdcutWrapper>
        </Wrapper>
    )
}