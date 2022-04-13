import styled from "styled-components";

export const ContainerGeral = styled.div`
    display: flex;
    flex-direction: column;

    width: 700px;

    border: 1px solid gray;
    box-shadow: 1px 1px gray;

    padding: 30px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
`

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ContainerTitle = styled.div`
    font-size: 15px;
    font-family: cursive;
    text-align: center;

    width: 100%;

    margin: 20px;
    border: 1px solid gray ;
    box-shadow: 1px 1px gray;
    margin-top: 0px;
`

export const ContainerInputNomeData = styled.div`
    width: 100%;
`

export const ContainerInputDestinoDescricaoDuracao = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    margin-bottom: 30px;
`

export const ContainerInputNome = styled.input`
    width: 65%;

    margin: 10px;
    padding: 10px;

    border: 1px solid black;
`

export const ContainerInputData = styled.input`
    width: 20%;

    padding: 8px;
    margin: 10px 10px 10px 35px;

    border: 1px solid black;
`

export const ContainerInputInduvidual = styled.input`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
`

export const ContainerButton = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    height: 100px;
`

export const  ContainerButtonIndividual = styled.button`
    padding: 10px;
    font-family: cursive;

    width: 100px;
    height: 80px;

    border: 1px solid black;
    border-radius: 10%;

    :hover{
        background-color: gray;
    }
`