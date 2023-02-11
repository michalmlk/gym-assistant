import React, {ReactNode, FC} from "react";
import TopBar from '../organisms/TopBar/TopBar';
import {Wrapper} from "./MainTemplate.styles";

interface MainTemplateProps {
    children: ReactNode;
}

const MainTemplate: FC<MainTemplateProps> = ({children}) => {
    return(
        <Wrapper>
            <TopBar />
            {children}
        </Wrapper>
    )
}

export default MainTemplate;