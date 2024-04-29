import React from "react";
import { render, screen } from "@testing-library/react";

import OpsCentreCreateDialogComponent from "../OpsCentreCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders opsCentre create dialog", async () => {
  const store = init({ models });
  render(
    <Provider store={store}>
      <MemoryRouter>
        <OpsCentreCreateDialogComponent show={true} />
      </MemoryRouter>
    </Provider>,
  );
  expect(
    screen.getByRole("opsCentre-create-dialog-component"),
  ).toBeInTheDocument();
});
