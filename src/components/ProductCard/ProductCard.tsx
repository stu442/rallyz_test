import { BrandText, Price, ProductImage, Title, TitleWrapper, Wrapper } from "./style";

interface ProductCardProps {
    id: number
    image: string
    brand: string
    title: string
    price: number
}

export default function ProductCard({
    id,
    image,
    brand,
    title,
    price
}: ProductCardProps) {
    return (
        <Wrapper>
            <ProductImage alt={`product ${id}`} src={image}></ProductImage>
            <TitleWrapper>
                <BrandText>{brand}, <Title>{title}</Title></BrandText>
            </TitleWrapper>
            <Price>${price}</Price>
        </Wrapper>
    )
}

