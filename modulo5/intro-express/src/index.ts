import express from 'express';
import cors from 'cors';
import {Request, Response} from 'express';

import {users} from './data'

const app = express();
app.use(express.json());
app.use(cors());



// Exercício 1
app.get("/", (req: Request, res: Response) => {
    res.status(200).send("Hello from Express")
})

// Exercício 2
type user = {
    id: number,
    name: string,
    phone: string,
    email: string,
    website: string
}

// Exercício 3
// Esta no arquivo data.ts, dentro da pasta src!

// Exercício 4
app.get('/users', (req: Request, res: Response) => {
    try{

        const listUsers = users;
        const userList = listUsers.map((user) => {
            return user.name
        })

        res.status(200).send(userList)
    }catch(error){
        res.status(400).end("Usuários não encontrados!")
    }
})


// Exercício 5
type postUser = {
    id: number,
    title: string,
    body: string,
    userId: string
}

// Exercício 6
// Faz dentro do array de usuários é melhor, pois consigo,
// pelo id do usuário encontrar estes dados


// Exercício 7
// Exercício 8








app.listen(3003, () => {
    console.log("Servidor iniciado!")
})