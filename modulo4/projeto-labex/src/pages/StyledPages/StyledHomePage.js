import styled from "styled-components";

export const ContainerHomePage = styled.div`
    background-color: #E2E2DC;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    margin-left: auto;
    margin-right: auto;
    margin-top: 5%;

    height: 450px;
    width: 50%;
    border: 1px solid gray;
    border-radius: 10%;
    box-shadow: 3px 2px gray;
`

export const ContainerTitle = styled.h2`
    font-family: cursive;
    font-size: 50px;

    height: 30%;
`

export const ContainerButton = styled.div`
    height: 60%;
`

export const ButtonHome = styled.button`
    width: 150px;
    height: 100px;

    padding: 10px;
    margin: 0px 40px;

    border-radius: 10%;
    font-size: 20px;
    :hover{
        background-color: gray;
        color: white;
    }
`