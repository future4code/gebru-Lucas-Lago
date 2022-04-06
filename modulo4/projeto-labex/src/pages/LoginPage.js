import react from "react"

function LoginPage(){
    return(
        <div>
            <div>
            <h2> LoginPage </h2>
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Email"
                />
                <input
                    type="password"
                    placeholder="Senha"
                />
            </div>
            <div>
                <button> VOLTAR </button>
                <button> ENTRAR </button>
            </div>
        </div>
    )
}

export default LoginPage