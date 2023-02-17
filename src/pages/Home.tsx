import React from 'react'
import MainTemplate from "../components/templates/MainTemplate";
import ActivityForm from "../components/organisms/ActivityForm/ActivityForm";


const Home = () => {
    return (
        <MainTemplate>
            <ActivityForm onSubmit={(e) => {
                e.preventDefault();
            }} />
        </MainTemplate>
    )
}

export default Home;