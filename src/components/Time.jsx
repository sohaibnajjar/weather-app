import { useState, useEffect } from "react";
import styled from "styled-components";

const StyledTime = styled.div`
  font-size: 3.5em;
  display: flex;
  gap: 0.2em;
  margin-bottom: 15px;
`;
const StyledAmPm = styled.div`
  font-size: 0.7em;
  padding-top: 12px;
`;
function Time() {
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [amPm, setAmPm] = useState("AM");

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      console.log(new Date(Date(1640174917)));
      if (date.getHours() > 12) {
        let newHours = date.getHours() - 12;
        setHours(newHours);
        setAmPm("PM");
      } else {
        setHours(date.getHours());
        setAmPm("AM");
      }

      let newminutes = date.getMinutes();

      if (newminutes < 10) {
        setMinutes(`0${newminutes}`);
      } else {
        setMinutes(newminutes);
      }
    }, 1000);
  }, []);

  return (
    <StyledTime>
      <div>
        {hours}:{minutes}
      </div>
      <StyledAmPm>{amPm}</StyledAmPm>
    </StyledTime>
  );
}

export default Time;
