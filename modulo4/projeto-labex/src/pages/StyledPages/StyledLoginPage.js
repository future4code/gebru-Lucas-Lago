import styled from "styled-components";

export const ContainerGeral = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    margin-left: auto;
    margin-right: auto;
    
    width: 500px;
    height: 500px;

    margin-top: 20px;
`
export const ContainerTitle = styled.div`
    background-color: #E2E2DC;

    text-align: center;
    font-size: 15px;
    font-family: cursive;

    margin-bottom: 20px;
    border: 1px solid gray;
    box-shadow: 1px 1px gray;
    width: 100%;
`

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    height: 300px;
    width: 70%;
`

export const InputPage = styled.input`
    margin: 20px;
    padding: 8px;

    border: 1px solid black;
`

export const ContainerButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    
    height: 120px;
`

export const ButtonPage = styled.button`
    background-color: #E2E2DC;
    font-size: 15px;
    font-family: cursive;

    margin: 0px 25px;
    padding: 20px;

    border-radius: 10%;

    :hover{
        background-color: gray;
    }
`