import styled from "styled-components";
const StyledForm = styled.form`
  background-color: #636262;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  box-shadow: inset 0em -2em 1em rgba(184, 184, 184, 0.3);
`;
const StyledInput = styled.input`
  padding: 5px 15px;
  border: none;
  background-color: #e0e0e0;
  color: #414141;
  font-size: 18px;
  border-radius: 5px;
  text-align: center;
`;
const Form = ({ getData, setCity, city }) => {
  return (
    <StyledForm onSubmit={(e) => getData(e)}>
      <StyledInput
        type="text"
        name="inputFeald"
        placeholder="Enter Contry Name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <StyledInput type="submit" value="Submit" />
    </StyledForm>
  );
};

export default Form;
