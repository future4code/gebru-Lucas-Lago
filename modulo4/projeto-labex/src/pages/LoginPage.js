import react, {useState} from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"

import {ContainerGeral, ContainerTitle, ContainerInput, InputPage, ContainerButton, ButtonPage} from "./StyledPages/StyledLoginPage"

import {goToAdminHomePage, goToBackPage} from "../Routes/Coodinator"

function LoginPage(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }
    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const onSubmitLogin = () => {
        const Url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/lucas-lago-gebru/login'

        const body = {
            email: email, 
            password: password
        }

        axios
        .post(Url, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            goToAdminHomePage(navigate)
        })
        .catch((err) => {
            alert("Email ou Senha estão incorretos!")
            console.log(err.response)
        })
    }

    return(
        <ContainerGeral>
            <ContainerTitle>
                <h2> LoginPage </h2>
            </ContainerTitle>
            <ContainerInput>
                <InputPage
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={onChangeEmail}
                />
                <InputPage
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={onChangePassword}
                />
            </ContainerInput>
            <ContainerButton>
                <ButtonPage onClick={() => goToBackPage(navigate)}> <b> VOLTAR </b> </ButtonPage>
                <ButtonPage onClick={onSubmitLogin}> <b> ENTRAR </b> </ButtonPage>
            </ContainerButton>
        </ContainerGeral>
    )
}

export default LoginPage