import React from "react";
import { render, screen } from "@testing-library/react";

import BreakdownPage from "../BreakdownPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders breakdown page", async () => {
  const store = init({ models });
  render(
    <Provider store={store}>
      <MemoryRouter>
        <BreakdownPage />
      </MemoryRouter>
    </Provider>,
  );
  expect(screen.getByRole("breakdown-datatable")).toBeInTheDocument();
  expect(screen.getByRole("breakdown-add-button")).toBeInTheDocument();
});
