// Import components and utilities
import { useEffect, useReducer, useState } from "react";
import BookingForm from "./BookingForm";
import { fetchAPI } from "../utils/metaApiMockup";
import { act } from "react-dom/test-utils";
// Define function component
export default function BookingATable(props) {
  const submitForm = props;
  // Set initial states
  const [testText, setTextTest] = useState("Book Now");
  const [selectedDate, setSelectedDate] = useState("2023-02-12");
  const [availableTimes, setAvailableTimes] = useReducer(
    updateTimes,
    initializeTimes()
  );
  // Define reducer function for updating state
  function updateTimes(state, action) {
    try {
      switch (action.type) {
        case "UPDATE":
          // setAvailableTimes(action.payload);
          return { ...state, times: action.payload };
        case "SELECT":
          setTextTest(action.payload);
          return { ...state, selectedTime: action.payload };
        default:
          return state;
      }
    } catch (error) {
      console.error("Error in updateTimes function:", error);
    }
  }

  // Define function for initializing state
  function initializeTimes() {
    return { times: fetchAPI("") };
  }
  // Fetch data from API on component mount and whenever selectedDate updates
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchAPI(selectedDate);
        act(() => {
          setAvailableTimes({ type: "UPDATE", payload: data });
        });
      } catch (error) {
        console.error("Error fetching available times:", error);
      }
    }
    fetchData();
  }, [selectedDate]);
  // Render component

  // console.log("props", props);
  // console.log("logging in... fetch ", fetchAPI(parseFloat(selectedDate)));

  return (
    <>
      <h1>Booking a Table: {testText}</h1>
      <BookingForm
        availableTimes={availableTimes}
        setAvailableTimes={setAvailableTimes}
        setSelectedDate={setSelectedDate}
        submitForm={submitForm}
      />
    </>
  );
}
