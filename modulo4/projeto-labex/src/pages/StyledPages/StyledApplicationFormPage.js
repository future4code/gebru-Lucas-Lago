import styled from "styled-components";

export const ContainerGeral = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;

    padding: 0px 20px;
`

export const ContainerTitle = styled.div`
    background-color: #E2E2DC;
    width: 500px;
    text-align: center;

    margin: 20px;
    border: 1px solid gray;
    box-shadow: 1px 1px gray;
    box-sizing: content-box;
`

export const ContainerInput = styled.input`
    width: 500px;
    padding: 5px;
    margin: 5px;
    border: 1px solid black;
    box-sizing: content-box;
`

export const ContainerSelect = styled.select`
    width: 500px;
    padding: 5px;
    margin: 5px;
    border: 1px solid black;
    box-sizing: content-box;
`

export const ContainerButton = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-sizing: content-box;

    width: 500px;
    padding: 50px;
`

export const ButtonPage = styled.button`
    padding: 25px;
    background-color: #E2E2DC;
    border-radius: 10%;
    font-family: cursive;
    font-size: 15px;

    :hover{
        background-color: gray;
    }
    cursor: pointer; 
`