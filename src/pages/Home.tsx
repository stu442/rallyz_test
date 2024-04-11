import Header from "../components/Header/Header"
import ProductList from "../components/ProductList/ProductList"
import { Wrapper } from "./style"

export default function Home() {
    return (
        <Wrapper>
            <Header />
            <ProductList />
        </Wrapper>
    )
}