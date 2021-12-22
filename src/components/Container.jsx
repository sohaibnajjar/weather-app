import styled from "styled-components";

export const StyledContainer = styled.div`
  background-color: #5957ca;
  display: flex;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.2),
    0em -2em 1em rgba(0, 0, 0, 0.5), inset 0em 2em 1em rgba(56, 39, 134, 0.3);
  padding: 20px 30px;
  color: #fff;
`;
const StyledWeather = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-between;
  margin: 0px 30px;
`;
const StyledCondition = styled.div`
  text-align: center;
  font-size: 20px;
  width: 40%;
`;
const StyledImg = styled.img`
  width: 65%;
  margin-top: -20px;
`;

const StyledTempContainer = styled.div`
  width: 65%;
  /* padding: 20px 0px; */
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const StyledProp = styled.div`
  width: 60%;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: center;
`;
const Styledfont = styled.span`
  font-size: ${(props) => (props.size ? props.size : "16px")};
  color: ${(props) => (props.color ? props.color : "#fff")};
`;
const StyledSpan = styled.span`
  margin: 0px 10px;
  border-top: #ff5724 solid 2px;
  height: 8px;
  width: 35px;
  display: ${(props) => (props.display ? props.display : "inline-block")};
`;

const StyledOne = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
const Container = ({ dailyweather }) => {
  const _src = `http://openweathermap.org/img/wn/${dailyweather.current.weather[0].icon}@2x.png`;
  return (
    <StyledContainer>
      <StyledWeather>
        <StyledCondition>
          <StyledImg src={_src} alt="weather icon" />
          <div> {dailyweather.current.weather[0].main}</div>
        </StyledCondition>
        <StyledTempContainer>
          <div>
            <Styledfont size="45px">
              {dailyweather.daily[0].temp.max}°
            </Styledfont>
            <StyledSpan />
            <Styledfont size="23px" color="#ccc">
              Max Temperature
            </Styledfont>
          </div>
          <div>
            <Styledfont size="45px">
              {dailyweather.daily[0].temp.min}°
            </Styledfont>
            <StyledSpan />
            <Styledfont size="23px" color="#ccc">
              Min Temperature
            </Styledfont>
          </div>
        </StyledTempContainer>
      </StyledWeather>
      <StyledProp>
        <StyledOne>
          <Styledfont size="20px" color="#ccc">
            pressure (hPa)
          </Styledfont>
          <StyledSpan display={"block"} />
          <Styledfont size="35px"> {dailyweather.current.pressure}</Styledfont>
        </StyledOne>
        <StyledOne>
          <Styledfont size="20px" color="#ccc">
            wind speed (m/s)
          </Styledfont>
          <StyledSpan display={"block"} />
          <Styledfont size="35px">{dailyweather.current.wind_speed}</Styledfont>
        </StyledOne>
        <StyledOne>
          <Styledfont size="20px" color="#ccc">
            humidity (%)
          </Styledfont>
          <StyledSpan display={"block"} />
          <Styledfont size="35px">{dailyweather.current.humidity}</Styledfont>
        </StyledOne>
      </StyledProp>
    </StyledContainer>
  );
};

export default Container;
