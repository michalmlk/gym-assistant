import React, { useContext } from 'react'
import styled from "styled-components";
import { DataContext } from "../../context/DataProvider";
import { calculateBMI } from "../../utils";


export const Wrapper = styled.div`
  grid-area: ud;
  padding: 2rem;
`;

export const StyledUserData = styled.div`
  width: 100%;
  height: 40vh;
  border-radius: 15px;
  background-color: #ddd;
  box-shadow: 5px 10px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 2rem;

  h1 {
    font-size: 36px;
  }
`;

const UserData: React.FC = () => {

    const { userData } = useContext(DataContext);
    return <Wrapper>
        <StyledUserData>
            {userData ?
                <>
                    <h1>{userData.name}</h1>
                    <h3>Your current data:</h3>
                    <h4>Weight</h4>
                    <p>{userData.weight} kg</p>
                    <h4>Height</h4>
                    <p>{userData.height} cm</p>
                    <h4>BMI</h4>
                    <p>{calculateBMI(userData.weight, userData.height)}</p>
                </> : <h1> No user</h1>
            }


        </StyledUserData>
    </Wrapper>
}

export default UserData;