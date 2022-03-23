import styled from "styled-components"

export const LayoutCardScreen = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center; 
    
    width: 30%;
    border: 1px solid black;
    box-shadow: 2px 2px gray;
    border-radius: 2%;

    height: 700px;    
`

export const HeaderCard = styled.div`
    display: grid;
    grid-template-columns: 20% 60% 20%;
    grid-template-rows: 100%;

    justify-items: center;

    width: 100%;
    border-bottom: 1px solid gray;
`

export const LayoutButton = styled.button`
    background-color: white;
    border: none;

    padding: 20px;
    height: 100%;

    &:hover{
        background-color: gray;
    }
`