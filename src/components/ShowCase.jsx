import styled from "styled-components";
import Time from "./Time";
import Date from "./Date";
export const StyledShowCase = styled.div`
  background-image: url("https://cdn.pixabay.com/photo/2018/08/23/07/35/thunderstorm-3625405_1280.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  display: flex;
  padding: 80px 70px;
  justify-content: space-between;
  box-shadow: inset 0em 2em 2em rgba(15, 15, 15, 0.3);
  color: #fff;
`;
const StyledNameContainer = styled.div`
  font-size: 4em;
  text-align: end;
`;
const StyledTimeZone = styled.div`
  font-size: 0.3em;
`;

function ShowCase({ timezone, city }) {
  return (
    <StyledShowCase>
      <div>
        <Time />
        <Date />
      </div>
      <StyledNameContainer>
        <div>{city}</div>
        <StyledTimeZone>{timezone}</StyledTimeZone>
      </StyledNameContainer>
    </StyledShowCase>
  );
}

export default ShowCase;
