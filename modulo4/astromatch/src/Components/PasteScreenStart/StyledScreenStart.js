import styled from "styled-components";

export const LayoutCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    width: 90%;
    height: 65%;

    padding: 10px;
    border-radius: 4%;
    border: 1px solid gray;    
`

export const ContainerInfo = styled.div`
    margin: 10px;

    .NameMatch{
        font-size: 25px;
    }
    .BioMatch{
        font-size: 18px;
        word-wrap: break-word;
    }
`

export const ContainerButton = styled.div`
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 100%;
    
    .button1{
        grid-column-start: 2;
        grid-column-end: 3;

        width: 70px;
        height: 70px;
        border-radius: 100%;
        border: 2px solid red;

        font-size: 40px;
        color: red;
    }
    .button2{
        grid-column-start: 4;
        grid-column-end: 5;

        width: 70px;
        height: 70px;
        border-radius: 100%;
        border: 2px solid green;

        font-size: 35px;
        color: green;
    }

    padding: 10px;
    width: 90%;
    height: 10%;
`