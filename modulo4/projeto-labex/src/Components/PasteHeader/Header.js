import React from "react";
import LogoLabex from "../../Imagens/LogoLabex.png";
import {ContainerHeader, ContainerEsquerda, ContainerImg, ContainerTitle, ContainerDireita, ButtonHome, ButtonSignUp} from "./StyledHeader"

export const Header = () => {
    return(
        <ContainerHeader>
            <ContainerEsquerda>
                <ContainerImg src={LogoLabex}/>
                <ContainerTitle> Aviãozin </ContainerTitle>
            </ContainerEsquerda>
            <ContainerDireita>
                <ButtonHome> HOME </ButtonHome>
                <ButtonSignUp> Sign Up </ButtonSignUp>
            </ContainerDireita>
        </ContainerHeader>
    )
}