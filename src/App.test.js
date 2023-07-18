import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

test("App renders correctly", () => {
  render(<App />);

  const incrementButton = screen.getByRole("button", { name: /increment/i });
  const decrementButton = screen.getByRole("button", { name: /decrement/i });

  const resultElement = screen.getByText(/result:/i);

  expect(incrementButton).toBeInTheDocument();
  expect(decrementButton).toBeInTheDocument();
  expect(resultElement).toHaveTextContent("Result: 0");
});

test("Increment button increments counter", () => {
  render(<App />);

  const incrementButton = screen.getByRole("button", { name: /increment/i });
  const resultElement = screen.getByText(/result:/i);

  fireEvent.click(incrementButton);
  expect(resultElement).toHaveTextContent("Result: 1");

  fireEvent.click(incrementButton);
  expect(resultElement).toHaveTextContent("Result: 2");

  fireEvent.click(incrementButton);
  expect(resultElement).toHaveTextContent("Result: 3");
});
