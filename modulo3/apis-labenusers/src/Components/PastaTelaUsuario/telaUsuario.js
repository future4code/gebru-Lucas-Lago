import React from "react";
import axios from "axios";
import styled from "styled-components";

const UserCard = styled.div`
    display: flex;
    justify-content: space-between;

    padding: 10px;
    margin: 10px;
    border: 1px solid black;
    width: 300px;
`

class UsersScreen extends React.Component {
    state = {
        usersList: []
    }

    componentDidMount(){
        this.getAllUsers()
    }

    getAllUsers = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

        axios
            .get(url, {
                headers: {
                    Authorization:'lucas-lago-gebru'
                }
            })
            .then(res => {
                this.setState({ usersList: res.data })
            })
            .catch(err => console.log(err.response))
    }

    deleteUser = (userId) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`

        axios
            .delete(url, {
                headers: {
                    Authorization: 'lucas-lago-gebru'
                }
            })
            .then( res => {alert(`Usuárie deletade com sucesso!!!`)
                this.getAllUsers()
            })
            .catch( err => console.log(err.response))
    }

    render(){
        const renderUsersList = this.state.usersList.map((user) => {
            return (
                <UserCard key={user.id}>
                    <spam> {user.name} </spam>
                    <button onClick={() => this.deleteUser(user.id)}> Apagar {user.name} </button>
                </UserCard>
            )
        })

        return(
            <div>
                <h3> Tela de Usuários Cadastrados! </h3>
                {renderUsersList}
                <button onClick={this.props.goToSingUpScreen}> Ir para Cadastro </button>
            </div>
        )
    }
}
export default UsersScreen