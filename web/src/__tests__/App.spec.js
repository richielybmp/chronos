import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import App from "../App"

let container;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

describe("<App /> component", () => {
    test("it renders the component without crashing", () => {
        act(() => {
            ReactDOM.render(<App />, container);
        });
        ReactDOM.unmountComponentAtNode(container);
    });
});