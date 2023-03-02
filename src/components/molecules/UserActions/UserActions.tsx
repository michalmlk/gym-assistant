import React from 'react';
import {NavLink} from "react-router-dom";
import {faRightToBracket, faRectangleList, faRightFromBracket, faSliders} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const StyledUserActions = styled.div`
  display: flex;
  gap: 1rem;
  position: absolute;
  right: 2rem;
`;

const Link = styled(NavLink)`
  font-size: 22px;
  transition: all 0.15s ease;
  color: #000;

  &:hover {
    color: #45dc72;
    cursor: pointer;
  }
`;

interface IUserActionProps {
    isLoggedIn: boolean;
}

const UserActions: React.FC<IUserActionProps> = ({isLoggedIn}) => {
    return (
        <StyledUserActions>
            {isLoggedIn ? <>
                    <Link to='/settings'><FontAwesomeIcon icon={faSliders}/></Link>
                    <Link to='/logout'><FontAwesomeIcon icon={faRightFromBracket}/></Link>
                </> :
                <>
                    <Link to='/login'><FontAwesomeIcon icon={faRightToBracket}/></Link>
                    <Link to='/register'><FontAwesomeIcon icon={faRectangleList}/></Link>
                </>}
        </StyledUserActions>
    )
}

export default UserActions;