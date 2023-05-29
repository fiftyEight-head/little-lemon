import { useState } from "react";

export default function BookingForm(props) {
  const [date, setDate] = useState("01/01/2023");
  const [currentTime, setCurrentTime] = useState("17:00");
  const [guests, setGuests] = useState("1");
  const [ocassion, setOcassion] = useState("Anniversary");

  const { availableTimes, setAvailableTimes, setSelectedDate } = props;
  const { submitForm } = props.submitForm;
  console.log(submitForm);

  const handleSubmit = (e) => {
    e.preventDefault();
    const submission = {
      date: date,
      time: currentTime,
      guests: guests,
      ocassion: ocassion,
    };

    const res = submitForm(submission);
    // console.log(res, submission);
    return res;
  };
  // console.log("props en form: ", props.submitForm);

  return (
    <>
      <form style={{ display: "grid", maxWidth: 200, gap: 20 }}>
        <label htmlFor='resDate'>Choose Date</label>
        <input
          type='date'
          id='resDate'
          onChange={(e) => {
            setDate(e.target.value);
            setSelectedDate(e.target.value);
            // console.log(e.target.value);
          }}
        />
        <label htmlFor='resTime'>Choose Time</label>
        <select
          id='resTime'
          onClickCapture={(e) => {
            setCurrentTime(e.target.value);
            setAvailableTimes({ type: "SELECT", payload: e.target.value });
          }}
        >
          {availableTimes.times.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        <label htmlFor='guests'>Number of Guests</label>
        <input
          type='number'
          placeholder='1'
          min={1}
          max={10}
          id='guests'
          onChange={(e) => setGuests(e.target.value)}
        />
        <label htmlFor='ocassion'>Ocassion</label>
        <select id='ocassion' onChange={(e) => setOcassion(e.target.value)}>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input
          onClick={handleSubmit}
          type='submit'
          value='Make your reservation'
        />
      </form>
    </>
  );
}
