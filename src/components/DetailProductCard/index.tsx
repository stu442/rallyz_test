import { Product } from "../../types/productType"
import { Brand, DescriptionSection, ImagesWrapper, ProductsImg, ThumbnailImg, Title, Wrapper } from "./style"

interface DetailProductCardProps {
    product: Product | undefined
}

function DetailProductCard({product} : DetailProductCardProps) {
    return (
        <Wrapper>
            <ThumbnailImg src={product?.thumbnail} alt="product thumbnail" />
            <DescriptionSection>
                <Title>{product?.title}</Title>
                <Brand>{product?.brand}</Brand>
                <p>{product?.description}</p>
                <p>$ {product?.price}</p>
            </DescriptionSection>
            <h1>Detail Images</h1>
            <ImagesWrapper>
                {product?.images.map((image, index) => (
                    <ProductsImg key={index} src={image} alt="product" />
                ))}
            </ImagesWrapper>
        </Wrapper>
    )
}

export default DetailProductCard