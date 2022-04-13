import styled from "styled-components";

export const ConmtainerGeral = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    width: 700px;
    height: 1000px;

    margin-left: auto;
    margin-right: auto;
`

export const ContainerTitle = styled.div`
    background-color: #E2E2DC;
    text-align: center;

    font-family: cursive;
    font-size: 20px;

    margin: 20px;
    border: 1px solid gray;
    width: 100%;
`

export const ContainerButton = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    height: 50px;
    width: 100%;
`

export const ButtonPage = styled.button`
    text-align: center;
    font-size: 15px;
    font-family: cursive;

    height: 30px;
    width: 150px;

    :hover{
        background-color: gray;
    }
    cursor: pointer; 
`

export const ContainerTrip = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: #E2E2DC;
    font-size: 20px;

    padding: 10px;
    margin: 10px;

    width: 700px;
    height: 60px;
    border: 1px solid gray;
    box-shadow: 1px 1px gray;    
`

export const ButtonTrip = styled.button`
    width: 60px;
    height: 40px;

    border: 1px solid black;

    :hover{
        background-color: gray;
    }
    
    cursor: pointer;  
`