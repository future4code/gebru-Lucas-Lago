import exp from "constants";

import { User } from "../src/Types/User";

import { performPurchase } from "../src";


describe("Exercício 1", () => {
    test("Teste de saldo maior do que o valor de compra", () => {
        const user: User = {
            name: "Marie",
            saldo: 100
        };

        const result = performPurchase(user, 30);

        expect(result).toEqual({
            name: "Marie",
            saldo: 70
        });
    });

    test("Teste de saldo igual ao valor de compra", () => {
        const user: User = {
            name: "Quemoso",
            saldo: 40
        };

        const result = performPurchase(user, 40);

        expect(result).toEqual({
            name: "Quemoso",
            saldo: 0
        });
    });

    test("Teste de saldo menor do que o valor de compra", () => {
        const user: User = {
            name: "Mingau",
            saldo: 20
        };

        const result = performPurchase(user, 50);

        expect(result).not.toBeDefined();
    });
})