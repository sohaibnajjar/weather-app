import { useState, useEffect } from "react";
import Form from "./Form";
import Container from "./Container";
import ShowCase from "./ShowCase";
import axios from "axios";
import styled from "styled-components";
import { StyledShowCase } from "./ShowCase";
import { StyledContainer } from "./Container";
const StyledHomePage = styled.div`
  display: grid;
  box-sizing: border-box;
  overflow: hidden;
  grid-template-rows: 8% 62% 30%;
  width: 100vw;
  height: 100vh;
`;
const HomePage = () => {
  const [city, setCity] = useState("cupertino");
  const [weather, setWeather] = useState("");
  const [dailyweather, setDailyWeather] = useState("");

  const getData = (e) => {
    e.preventDefault();

    getWeather();
    setCity("");
  };
  const getWeather = async () => {
    const res = await axios({
      url: `http://api.openweathermap.org/data/2.5/weather?appid=077ffe45ed0caa4da2a7b6e0170e1243&q=${city}&units=metric`,
      method: "get",
    });
    setWeather(res.data);
    getDaily(res.data);
  };
  const getDaily = async (data) => {
    const res = await axios({
      url: `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=hourly&appid=077ffe45ed0caa4da2a7b6e0170e1243&units=metric`,
      method: "get",
    });
    setDailyWeather(res.data);
  };
  useEffect(() => {
    getWeather();
  }, []);
  return (
    <StyledHomePage>
      <Form setCity={setCity} getData={getData} city={city} />

      {dailyweather ? (
        <ShowCase timezone={dailyweather.timezone} city={weather.name} />
      ) : (
        <StyledShowCase />
      )}
      {dailyweather ? (
        <Container dailyweather={dailyweather} />
      ) : (
        <StyledContainer />
      )}
    </StyledHomePage>
  );
};

export default HomePage;
