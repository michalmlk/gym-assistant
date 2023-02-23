import styled from "styled-components";

export const StyledFormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin: 20px 0;

  label {
    font-size: 16px;
    font-weight: bold;
  }

  input, select {
    border-radius: 50px;
    border: 1px solid #ddd;
    padding: 0 15px;
    font-size: 18px;
    height: 40px;
  }
`;
