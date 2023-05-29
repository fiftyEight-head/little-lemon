import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
// import App from './App';
import BookingForm from "./components/BookingForm";
import BookingATable from "./components/BookingPage";
import BookingConfirmation from "./components/ConfirmedBooking";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import { fetchAPI, submitAPI } from "./utils/metaApiMockup";
import { BrowserRouter, Route, Routes, navigate } from "react-router-dom";
import App from "./App";

function submitForm(formData) {
  const res = submitAPI(formData);

  if (res) {
    navigate("/BookingConfirmation");
  }
}

test("Renders the BookingForm heading", () => {
  render(
    <BookingATable>
      <BookingForm />
    </BookingATable>
  );
  const headingElement = screen.getByText("Booking a Table: Book Now");
  expect(headingElement).toBeInTheDocument();
});

test("the intializes times function", () => {
  render(
    <BrowserRouter>
      <BookingATable>
        <BookingForm />
      </BookingATable>
    </BrowserRouter>
  );
  const availableTime = fetchAPI("");
  expect(availableTime).not.toBe([]);
});

test("Updates the time correctly", () => {
  render(<BookingForm />);
  const dateSelector = screen.getByLabelText(/Choose date/);
  fireEvent.change(dateSelector, { target: { value: "2023-02-05" } });
  const timeDropDown = screen.getByLabelText(/Choose time/);
  fireEvent.change(timeDropDown, { target: { value: "17:00" } });
  expect(timeDropDown.value).toEqual("17:00");
});
