import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  grid-template-areas: 'tb tb tb'
                       'db db stb'
                       'ch ud stb';
  grid-template-rows: 70px 1fr 1fr;
  grid-template-columns: repeat(3, 1fr);
`;
