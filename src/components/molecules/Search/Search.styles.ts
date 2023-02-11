import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const StyledButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50px;
  font-size: 18px;
  transition: color 0.2s ease;

  &:hover {
    color: #45dc72;
  }
`;

export const StyledInput = styled.input`
  width: 450px;
  height: 40px;
  border-radius: 50px;
  border: none;
  padding-left: 20px;
  font-size: 18px;

  &::placeholder {
    transition: all 0.25s ease;
    color: #8d8d8d;
  }

  &:focus::placeholder {
    opacity: 0;
    transform: translateX(250px);
  }
`;