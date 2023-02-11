import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  grid-template-areas: 'tb tb tb'
                       'db db stb'
                       'db db stb';
  grid-template-rows: 60px 1fr 1fr;
  grid-template-columns: repeat(3, 1fr);
`;
