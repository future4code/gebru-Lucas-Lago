import react from "react"
import { useNavigate } from "react-router-dom";

import {useRequestData} from "../Hooks/useRequestData"
import {BaseUrlApi} from "../Constants/Urls"

import {goToApplicationFormPage, goToBackPage} from "../Routes/Coodinator"
import {ContainerTripPage, ContainerButtonPage, ContainerButton, ContanerTitle, ContainerListTrips} from "./StyledPages/StyledListTripPage"

function ListTripsPage(){
    const navigate = useNavigate()
    const data = useRequestData(`${BaseUrlApi}`) 

    console.log(data)

    // const arrayListTrips = data.map((item) => {
    //     const name = item.name
    //     return(
    //         console.log(name)
    //     )
    // })

    // console.log(arrayListTrips)

     

    return(
        <ContainerTripPage>
            <ContainerButtonPage>
                <ContainerButton onClick={() => goToApplicationFormPage(navigate)}> <b> INSCREVA-SE </b> </ContainerButton>
                <ContainerButton onClick={() => goToBackPage(navigate)}> <b> VOLTAR </b> </ContainerButton>
            </ContainerButtonPage>
            <div>
                <ContanerTitle>
                    <h2> ListTripsPage </h2>
                </ContanerTitle>
                <ContainerListTrips>
                    teste
                </ContainerListTrips> 
            </div>
             
        </ContainerTripPage>
    )
}

export default ListTripsPage