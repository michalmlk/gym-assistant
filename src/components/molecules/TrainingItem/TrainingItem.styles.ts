import styled from 'styled-components';

export const IntensityDisplayer = styled.div`
  width: 60px;
  height: 40px;
  border-radius: 10px;
  background-color: red;
  font-size: 16px;
  line-height: 40px;
  color: #fff;
  text-align: center;
  font-weight: bold;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-self: center;
  
  button {
    height: 40px;
    width: 40px;
    border: none;
    border-radius: 50%;
    background-color: transparent;
    transition: background-color 0.1s ease;
    font-size: 18px;
    color: #ddd;
    
    &:hover {
      cursor: pointer;
      background-color: #ddd;
      color: crimson;
    }
  }
  
`;

export const Wrapper = styled.div`
  display: grid;
  height: 60px;
  grid-template-columns: 80px 240px repeat(2, 1fr);
  grid-template-rows: 60px;
  grid-template-areas: "intensity type duration buttons";
  border-radius: 15px;
  background-color: #fff;
  
  ${IntensityDisplayer} {
    grid-area: intensity;
    align-self: center;
    height: 40px;
    margin-left: 10px;
  }
  
  p {
    line-height: 60px;
    font-size: 20px;
    text-align: center;
    grid-area: type;
  }
  
  p:nth-of-type(2) {
    grid-area: duration;
  }
  
  ${Buttons} {
    grid-area: buttons;
  }
`;

