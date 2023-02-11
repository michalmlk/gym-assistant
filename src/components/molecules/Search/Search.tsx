import React from "react";
import {StyledInput, Wrapper, StyledButton} from "./Search.styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

interface SearchProps {
    placeholder?: string;
    icon?: string;
}

const Search: React.FC<SearchProps> = ({placeholder}) => {
    return (
        <Wrapper>
            <StyledInput placeholder={placeholder}/>
            <StyledButton>
                <FontAwesomeIcon icon={faMagnifyingGlass}/>
            </StyledButton>
        </Wrapper>
    )
}
export default Search;