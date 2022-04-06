import react from "react"
import {ContainerTripPage, ContainerButtonPage, ContainerButton, ContanerTitle} from "./StyledPages/StyledListTripPage"
function ListTripsPage(){
    return(
        <ContainerTripPage>
            <ContainerButtonPage>
                <ContainerButton> <b> INSCREVA-SE </b> </ContainerButton>
                <ContainerButton> <b> VOLTAR </b> </ContainerButton>
            </ContainerButtonPage>
            <div>
                <ContanerTitle>
                    <h2> ListTripsPage </h2>
                </ContanerTitle>
                <div>
                container lista
                </div> 
            </div>
             
        </ContainerTripPage>
    )
}

export default ListTripsPage