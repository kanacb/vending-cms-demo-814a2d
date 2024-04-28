import React from "react";
import { render, screen } from "@testing-library/react";

import HcStage2AgreeEditDialogComponent from "../HcStage2AgreeEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders hcStage2Agree edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <HcStage2AgreeEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("hcStage2Agree-edit-dialog-component")).toBeInTheDocument();
});
