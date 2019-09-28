import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import { CronogramaCard } from "../app/shared/components/cards/CronogramaCard";
import { Cronograma } from 'chronos-core'

let container;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

describe("CronogramaCard component", () => {
    test("it renders the component header with the correct value", () => {
        const cronograma = new Cronograma("1234", "Teste", "descricao", "2019-08-03 00:00:00", "2020-01-01 00:00:00", []);
        act(() => {
            ReactDOM.render(
                <MemoryRouter>
                    <CronogramaCard cronograma={cronograma} setOnDetail={() => null} />
                </MemoryRouter>, container);
        });
        const header = container.getElementsByClassName("cronograma_card_header")[0];
        expect(header.textContent).toBe("Teste");
        container.getElementsByClassName("card")[0].click();
    });
});