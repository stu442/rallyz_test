import styled from "styled-components";

export const Wrapper = styled.div`
    position: fixed;
    top: 0;
    width: 100dvw;
    height: 50px;
    background-color: #f5f5f5;
    display: flex;
    justify-content: start;
    align-items: center;
`

export const Button = styled.button`
    margin-left: 8px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    &:hover {
        color: blue;
    }
`