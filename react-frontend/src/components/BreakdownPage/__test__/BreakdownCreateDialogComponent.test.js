import React from "react";
import { render, screen } from "@testing-library/react";

import BreakdownCreateDialogComponent from "../BreakdownCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders breakdown create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <BreakdownCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("breakdown-create-dialog-component")).toBeInTheDocument();
});
