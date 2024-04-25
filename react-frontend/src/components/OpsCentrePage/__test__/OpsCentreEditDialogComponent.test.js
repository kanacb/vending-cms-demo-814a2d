import React from "react";
import { render, screen } from "@testing-library/react";

import OpsCentreEditDialogComponent from "../OpsCentreEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders opsCentre edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <OpsCentreEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("opsCentre-edit-dialog-component")).toBeInTheDocument();
});
