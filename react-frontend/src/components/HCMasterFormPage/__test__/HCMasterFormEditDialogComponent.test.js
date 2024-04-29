import React from "react";
import { render, screen } from "@testing-library/react";

import HCMasterFormEditDialogComponent from "../HCMasterFormEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders hCMasterForm edit dialog", async () => {
  const store = init({ models });
  render(
    <Provider store={store}>
      <MemoryRouter>
        <HCMasterFormEditDialogComponent show={true} />
      </MemoryRouter>
    </Provider>,
  );
  expect(
    screen.getByRole("hCMasterForm-edit-dialog-component"),
  ).toBeInTheDocument();
});
