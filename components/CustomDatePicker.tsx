'use client'
import React, { Dispatch, SetStateAction, useState } from "react";
import DatePicker from "tailwind-datepicker-react";

export default function CustomDatePicker({date,setDate}:{date:Date |null,setDate:Dispatch<SetStateAction<Date>>}) {

  
  const options = {
    title: "Birthday",
    autoHide: true,
    todayBtn: false,
    clearBtn: true,   
    icons: {
      // () => ReactElement | JSX.Element
      prev: () => <span>Previous</span>,
      next: () => <span>Next</span>,
    },
    datepickerClassNames: "top-12",
    defaultDate: new Date(),
    language: "en",
    
  };

  const [show, setShow] = useState(false);
  const handleChange = (selectedDate: Date) => {
    setDate(selectedDate)
  };
  const handleClose = (state: boolean) => {
    setShow(state);
  };

  return (
    <div>
      <DatePicker
        options={options}
        onChange={handleChange}
        show={show}
        setShow={handleClose}
      />
    </div>
  );
}
