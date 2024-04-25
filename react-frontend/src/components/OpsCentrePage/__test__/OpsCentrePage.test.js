import React from "react";
import { render, screen } from "@testing-library/react";

import OpsCentrePage from "../OpsCentrePage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders opsCentre page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <OpsCentrePage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("opsCentre-datatable")).toBeInTheDocument();
    expect(screen.getByRole("opsCentre-add-button")).toBeInTheDocument();
});
