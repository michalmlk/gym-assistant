import styled from "styled-components";

export const Wrapper = styled.div`
  grid-area: stb;
  padding: 2rem;
`;

export const StyledForm = styled.form`
  width: 100%;
  height: 100%;
  padding: 2rem;
  border-radius: 15px;
  background-color: #ddd;
  box-shadow: 5px 10px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  
  label {
    font-size: 14px;
  }
  
  input {
    width: 100%;
    height: 40px;
    font-size: 18px;
  }
  
  button {
    width: 100px;
    height: 40px;
    border: none;
    border-radius: 50px;
    font-size: 18px;
    transition: background-color 0.2s ease;
    align-self: flex-end;

    &:hover {
      background-color: #45dc72;
      cursor: pointer;
    }
  }
`;