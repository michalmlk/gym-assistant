import React from "react";
import {StyledTopBar} from "./TopBar.styles";
import Search from "../../molecules/Search/Search";


const TopBar = () => {
    return (
        <StyledTopBar>
            <Search placeholder='Search'/>
        </StyledTopBar>
    )
}

export default TopBar;