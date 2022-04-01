import styled from "styled-components";

export const ContainerApp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

export const ContainerMatch = styled.div`
    margin: 30px;
    
`

export const ContainerButton = styled.button`
    background-color: whitesmoke;
    margin: 80px;

    height: 40px;
    width: 150px;
    border: 1px solid red;

    &:hover{
        background-color: gray;
    }
`