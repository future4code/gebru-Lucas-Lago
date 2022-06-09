import express, {Express, response} from 'express';
import cors from 'cors';
import {Request, Response} from 'express';
import { v4 as generateId } from 'uuid';

import { AddressInfo } from "net";

import { users, User, USER_TYPE } from './data';

const app: Express = express();

app.use(express.json());
app.use(cors());

// Exercício 1
// a) Utilizamos o método get;
// b) Deixei indicado no arquivo data.ts;
app.get("/users", (request: Request, response: Response) => {
  let errorCode = 500;
  try{
    const userList = users;

    if(!userList){
      errorCode = 422;
      throw new Error("Falta passar parâmetro de busca")
    }

    const userLists = userList.map((usuarios) => {
      return usuarios
    })

    response.status(200).send(userLists)

  }catch(error: any){
    response.status(errorCode).send(error.message)
  }
})


// Exercício 2
app.get("/users/Type", (request: Request, response: Response) => {
  let errorCode = 500;
  try{

    const userList = users
    const userType = request.query.type;
    let usersTypes: {}[] = [];

    if(!userList){
      errorCode = 422;
      throw new Error("Falta passar parâmetro de busca")
    }

    for(let element of userList){
      if(element.type === userType){
        usersTypes.push(element)
      }
    }

    response.status(200).send(usersTypes)
  }catch(error: any){
    response.status(errorCode).send(error.message)
  }
})

// a) Passei através do query.
// b) Através do enum.


// Exercício 3
app.get("/user", (request: Request, response: Response) => {
  let errorCode = 500;
  try{

    const userList = users;
    const userName = request.query.name;
    let user: {}[] = [];

    if(!userList){
      errorCode = 422;
      throw new Error("Falta passar parâmetro de busca")
    }

    for (let element of userList){
      if(element.name === userName){
        user.push(element)
      }else{
        errorCode = 422;
        throw new Error("Usuário não encontrado!")
      }
    }

    response.status(200).send(user)
  }catch(error: any){
    response.status(errorCode).send(error.message)
  }
})

// a) query, pois não é muito seguro passar dados sensiveis por params;


// Exercício 4
app.post("/createUser", (request: Request, response: Response) => {
  let errorCode = 500;
  try{

    const { name, email, type, age } = request.body;

    if( !name || !email || !type || !age){
      errorCode = 422;
      throw new Error ("Dados faltantes para criação de novo usuário!")
    }

    if( type != USER_TYPE.ADMIN && type != USER_TYPE.NORMAL ){
      errorCode = 422;
      throw new Error ("Inserir tipo de usuário válido: 'NORMAL' ou 'ADMIN'!")
    }

    const newUser :User = {
      id: users.length + 1,
      name: name,
      email: email,
      type: type,
      age: age
    }

    users.push(newUser)

    response.status(201).send(users)
  }catch(error: any){
    response.status(errorCode).send(error.message)
  }
})

// a) Muda que agora altero as coisas ja existentes e tenho que entrar com um id, 
// para realizar uma mudança de variáveis.

// b) Não considero, o método put é melhor para atuzalição de dados.

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
     const address = server.address() as AddressInfo;
     console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
     console.error(`Failure upon starting server.`);
  }
});