import React from "react";
import { render, screen } from "@testing-library/react";

import VmTypePage from "../VmTypePage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders vmType page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <VmTypePage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("vmType-datatable")).toBeInTheDocument();
    expect(screen.getByRole("vmType-add-button")).toBeInTheDocument();
});
