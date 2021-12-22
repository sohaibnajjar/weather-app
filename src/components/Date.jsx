import { useState, useEffect } from "react";
import styled from "styled-components";

const StyledDate = styled.div`
  font-size: 1.5em;
`;
const Time = () => {
  const [date, setDate] = useState("The Current Date is : ");

  useEffect(() => {
    setInterval(() => {
      const newDate = new Date();
      const year = newDate.getFullYear();
      const _date = newDate.getDate();
      const month = new Date(newDate.getMonth()).toLocaleString("en-us", {
        month: "long",
      });
      const day = new Date(newDate.getDay()).toLocaleString("en-us", {
        weekday: "long",
      });
      setDate(`${day}, ${month}   ${_date}, ${year}`);
    }, 1000);
  }, []);

  return <StyledDate>{date}</StyledDate>;
};

export default Time;
