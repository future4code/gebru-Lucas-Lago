import react from "react"
import axios from "axios"

import { goToBackPage } from "../Routes/Coodinator"
import { useNavigate } from "react-router-dom"

import {useProtectedPage} from "../Hooks/useProtectedPage"

function TripDetailPage(){
    const navigate = useNavigate()
    useProtectedPage()

    

    return(
        <div>
            <div>
                <div>
                    <div>
                        <p> TripDetailPage </p>
                    </div>
                    <div>
                        <p>Candidatos Aprovados</p>
                    </div>
                </div>
                <div>
                    candidatos inscritos
                </div>
            </div>
            <div>
                <button onClick={() => goToBackPage(navigate)}> VOLTAR </button>
            </div>
        </div>
        
    )
}

export default TripDetailPage