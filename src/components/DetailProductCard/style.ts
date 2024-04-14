import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ThumbnailImg = styled.img`
    width: 50dvh;
    height: 50dvh;
    object-fit: contain;
    border: 1px solid #f5f5f5;
`

export const DescriptionSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
    & > * {
        margin-bottom: 10px
    }
`

export const Title = styled.h1`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px
`

export const Brand = styled.h2`
    font-size: 16px;
    font-weight: bold;
    color: #4a4949;
`

export const ImagesWrapper = styled.div`
    width: 100dvw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

export const ProductsImg = styled.img`
    border: 1px solid #f5f5f5;
`