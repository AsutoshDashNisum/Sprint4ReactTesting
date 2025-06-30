// src/components/__tests__/Header.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../Header";

test("renders the header with title", () => {
  render(<Header title="Welcome" />);
  expect(screen.getByText(/welcome/i)).toBeInTheDocument();
});
