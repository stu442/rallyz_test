import styled from "styled-components";

export const ProdcutWrapper = styled.section`
    width: 80dvw;
    
    margin-top: 60px;

    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-auto-rows: minmax(0, 300px);
    grid-gap: 20px;
    gap: 20px;
`