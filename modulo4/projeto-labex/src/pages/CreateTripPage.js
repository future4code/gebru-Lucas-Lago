import react from "react"

function CreateTripPage(){
    return(
        <div>
            <div>
                <div>
                    <h2> CreateTripPage </h2>
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Nome"
                    />
                    <input
                        type="date"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Destino"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Descrição"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Duração"
                    />
                </div>   
            </div>
            <div>
                <button> VOLTAR </button>
                <button> CRIAR </button>
            </div>
        </div>
    )
}

export default CreateTripPage