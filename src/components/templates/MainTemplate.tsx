import React, { ReactNode } from "react";
import TopBar from '../organisms/TopBar/TopBar';
import { Wrapper } from "./MainTemplate.styles";

const MainTemplate: React.FC<{ children: ReactNode }> = ({ children }) => {
    return(
        <Wrapper>
            <TopBar />
            { children }
        </Wrapper>
    )
}

export default MainTemplate;