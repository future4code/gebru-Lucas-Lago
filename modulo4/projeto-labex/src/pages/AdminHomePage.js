import axios from "axios"
import react, {useEffect, useState} from "react"
import { useNavigate } from "react-router-dom"
import { useProtectedPage } from "../Hooks/useProtectedPage"

import {BaseUrlApi} from "../Constants/Urls"

import {ConmtainerGeral, ContainerTitle, ContainerButton, ButtonPage, ContainerTrip, ButtonTrip} from "./StyledPages/StyledAdminHomePage"

import {goToBackPage, goToCreateTripPage, goToLoginPage, goToTripDetailPage} from "../Routes/Coodinator"


function AdminHomePage(){
    const [arrayList, setArrayList] = useState([])
    const navigate = useNavigate()
    useProtectedPage()

    useEffect(() => {       
        const Url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/lucas-lago-gebru/trips`
        const headers = {
            headers: {
                auth: localStorage.getItem('token')
            }
        }
        
        axios
        .get(Url, headers)
        .then((res) => {
            setArrayList(res.data.trips)
        })
        .catch((err) => {
            console.log("ERRO",err.response)
        })

    }, [arrayList])

    const deleteTrip = (id) => {
        const Url = `${BaseUrlApi}/${id}`
        const headers = {
            headers:{
                auth: localStorage.getItem('token')
            }
        }

        axios
        .delete(Url, headers)
        .then((res) => {
            alert('Viagem deletada co SUCESSO!!')
        })
        .catch((err) => {
            console.log("Erro ao deletar Viagem", err.resolve)
        })
    } 

    const listTrips = arrayList.map((item) => {
        return (
            <ContainerTrip key={item.id} onClick={() => goToTripDetailPage(navigate, item.id)}>
                    <b> {item.name} </b>
                    <ButtonTrip onClick={() => deleteTrip(item.id)}> Delete </ButtonTrip>      
            </ContainerTrip>     
        )
    })

    const toLogout = (navigate) => {
        localStorage.removeItem("token")
        goToLoginPage(navigate)
    }

    return(
        <ConmtainerGeral>
            <ContainerTitle>
                <h2> AdminHomePage </h2>
            </ContainerTitle>
            <ContainerButton>
                <ButtonPage onClick={() => goToBackPage(navigate)}> <b> VOLTAR </b> </ButtonPage>
                <ButtonPage onClick={() => goToCreateTripPage(navigate)}> <b> CRIAR VIAGEM </b> </ButtonPage>
                <ButtonPage onClick={() => toLogout(navigate)}> <b> LOGOUT </b> </ButtonPage>
            </ContainerButton>
            <div>
                {listTrips}
            </div>
        </ConmtainerGeral>
    )
}

export default AdminHomePage