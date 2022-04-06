import styled from "styled-components";

export const ContainerTripPage = styled.div`

    display: grid;
    grid-template-columns: 20% 80%;
    grid-template-rows: 100% 20%;

    justify-items: center;
`

export const ContainerButtonPage = styled.div`
    background-color: #E2E2DC;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 250px;
    width: 150px;

    padding: 25px;
    margin: 30px;

    border: 1px solid gray;
    border-radius: 10%;
    box-shadow: 1px 1px gray;
`

export const ContainerButton = styled.button`
    width: 130px;
    height: 40px;
    margin: 20px;

    border: 1px solid black;
    box-shadow: 1px 1px gray;
    font-family: cursive;
    font-size: 15px;
`

export const ContanerTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #E2E2DC;
    width: 700px;
    
    margin: 30px;
    border: 1px solid gray;
    box-shadow: 1px 1px gray;
`