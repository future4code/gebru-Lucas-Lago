import express, {Express} from 'express';
import cors from 'cors';
import { AddressInfo } from "net";
import { Request, Response } from "express";

import { produtos, produtosTypes } from './data';

const app: Express = express();

app.use(express.json());
app.use(cors());

// Exercício 1
app.get("/test", (req: Request, res: Response) => {
    try{
        res.send("Exercício 1 - Teste!")
    }catch(error: any){
        res.status(400).end(error.message)
    }
})

// Exercício 3
app.post("/createProduto", (req: Request, res: Response) => {
    let errorCode = 500;
    try{
        const { name, price } = req.body

        if(!name || !price){
            errorCode = 422;
            throw new Error("Faltam parâmetros!")
        }

        const newProduto: produtosTypes = {
            id: 4,
            name: name,
            price: price
        }

        produtos.push(newProduto)

        res.status(200).send(produtos)
    }catch(error: any){
        res.status(errorCode).end(error.message)
    }
})

// Exercício 4
app.get("/allProdutos", (req: Request, res: Response) => {
    let errorCode = 500;
    try{

        const listaProdutos = produtos
        const productsList = listaProdutos.map((produto) => {
            return produto
        })

        res.status(200).send(productsList)
    }catch(error: any){
        res.status(errorCode).end(error.message)
    }
})

// Exercício 5
app.put("editProduto", (req: Request, res: Response) => {
    let errorCode = 500;
    try{

        const { id } = req.body;

        for(let element of produtos){
            let index = element.findIndex(produtos === id)
        }


        res.status(200).send()
    }catch(error){
        res.status(errorCode).end(error)
    }
})













const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
    console.error(`Failure upon starting server.`);
    }
});