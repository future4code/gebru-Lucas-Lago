import { Request, Response } from "express";
import { app } from "./app";

// Exercício 1
// a) Um construtor serve para instanciar objetos da classe na qual esse construtor foi definido, cria-se uma nova variável fora da classe
//    e atribui a classe a palavra reservada new, então chama-se a função que deseja de dentro da classe.

// b) Nenhuma vez, pois o código não esta correto.

//   class UserAccount {
//   private cpf: string;
//   private name: string;
//   private age: number;
//   private balance: number = 0;
//   // private transactions: Transaction[] = [];

//   constructor(
//      cpf: string,
//      name: string,
//      age: number,
//   ) {
//      console.log("Chamando o construtor da classe UserAccount")
//      this.cpf = cpf;
//      this.name = name;
//      this.age = age;
//   }

// }

// c) Conseguimos ter acesso às propriedades privadas de uma classe através do constructor.

  // class UserAccount {
  //   private cpf: string;
  //   private name: string;
  //   private age: number;
  //   private balance: number = 0;
  //   // private transactions: Transaction[] = [];

  //   constructor( cpf: string, name: string, age: number,){
  //     this.cpf = cpf,
  //     this.name = name,
  //     this.age = age
  //   }

  //   callbackUser = () :void => {
  //     console.log("Chamando o construtor da classe UserAccount")
  //   }

  // }

  // const user = new UserAccount('123.456.789-00', 'Lucas', 25)

  // user.callbackUser()

//===========================================================================================
// Exercício 2

// class Transaction {
//   private description: string;
//   private value: number;
//   private date: string;

//   constructor( description: string, value: number, date: string){
//     this.description = description,
//     this.value = value,
//     this.date = date
//   }
// }

//===========================================================================================
// Exercício 3

// class Blank {
//   private accounts: UserAccount[];

//   constructor (accounts: UserAccount[]){
//     this.accounts = accounts
//   }
// }