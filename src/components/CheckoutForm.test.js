import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event'

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />)

  const head = screen.queryByText(/checkout form/i)

  expect(head).toBeInTheDocument()
});

test("form shows success message on submit with form details", async() => {
  //Arrange
  render(<CheckoutForm />)
  const firstNameInput = screen.getByLabelText(/first name/i)
  const lastNameInput = screen.getByLabelText(/last name/i)
  const addressInput = screen.getByLabelText(/address/i)
  const cityInput = screen.getByLabelText(/city/i)
  const stateInput = screen.getByLabelText(/state/i)
  const zipInput = screen.getByLabelText(/zip/i)
  const button = screen.getByRole("button")

  //Act
  userEvent.type(firstNameInput, "Nardwuar")
  userEvent.type(lastNameInput, "the Human Serviette")
  userEvent.type(addressInput, "309 Kingizz Ln")
  userEvent.type(cityInput, "Asbury Park")
  userEvent.type(stateInput, "NJ")
  userEvent.type(zipInput, "00000")
  userEvent.click(button)

  //Assert
  await waitFor(() => {
    const successMessage = screen.getByTestId("successMessage")
    expect(successMessage).toBeInTheDocument()
  })
});
