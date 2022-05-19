import react from "react"
import { useNavigate } from "react-router-dom"

import {goToBackPage} from "../Routes/Coodinator"
import {ContainerGeral, ContainerTitle, ContainerInput, ContainerSelect, ContainerButton, ButtonPage} from "./StyledPages/StyledApplicationFormPage"

function ApplicationFormPage(){
    const navigate = useNavigate()
    
    return(
        <ContainerGeral>
            <ContainerTitle>
                <h2> Formulário de Inscrição </h2>
            </ContainerTitle>
            <div>
                <div>
                    <ContainerSelect
                        // Fazer map para puxar as informações para anexar nas opções
                    />
                </div>
                <div>
                    <ContainerInput
                        placeholder="Nome"
                    />
                </div>
                <div>
                    <ContainerInput
                        type="number"
                        placeholder="Idade"
                    />
                </div>
                <div>
                    <ContainerInput
                        type="text"
                        placeholder="Texto de Inscrição"
                    />
                </div>
                <div>
                    <ContainerSelect>
                        <option value="Brasil" selected="selected">Brasil</option>
                        <option value="Afeganistão">Afeganistão</option>
                        <option value="África do Sul">África do Sul</option>
                        <option value="Albânia">Albânia</option>
                        <option value="Alemanha">Alemanha</option>
                   
                    </ContainerSelect>
                </div> 
            </div>
            <ContainerButton>
                <ButtonPage onClick={() => goToBackPage(navigate)}> <b> VOLTAR </b> </ButtonPage>
                <ButtonPage> <b> INSCREVA-SE </b> </ButtonPage>
            </ContainerButton>
        </ContainerGeral>
    )
}

export default ApplicationFormPage