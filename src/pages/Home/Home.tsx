import Header from "../../components/Header"
import ProductList from "../../components/ProductList"
import { Wrapper } from "./style"

export default function Home() {
    return (
        <Wrapper>
            <Header />
            <ProductList />
        </Wrapper>
    )
}