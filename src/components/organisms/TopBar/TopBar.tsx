import React from "react";
import {StyledTopBar} from "./TopBar.styles";
import Search from "../../molecules/Search/Search";
import UserActions from "../../molecules/UserActions/UserActions";


const TopBar = () => {
    return (
        <StyledTopBar>
            <Search placeholder='Search'/>
            <UserActions isLoggedIn={false} />
        </StyledTopBar>
    )
}

export default TopBar;