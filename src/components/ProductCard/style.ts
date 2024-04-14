import styled from "styled-components";

export const BrandText = styled.span`
    color: #4a4949;
    font-weight: bold;
`
export const Title = styled.span`
    font-weight: normal;
    color: #000;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 80%;
    cursor: pointer;

    &:hover {
        ${BrandText}, ${Title} {
            color: blue;
        }
    }
`

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

export const ProductImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    margin-bottom: 20px
`

export const Price = styled.p`
    margin-top: 10px;
`