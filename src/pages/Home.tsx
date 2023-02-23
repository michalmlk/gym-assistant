import React from 'react'
import MainTemplate from "../components/templates/MainTemplate";
import ActivityForm from "../components/organisms/ActivityForm/ActivityForm";
import TrainingGrid from "../components/organisms/TrainingGrid/TrainingGrid";


const Home = () => {
    return (
        <MainTemplate>
            <ActivityForm onSubmit={(e) => {
                e.preventDefault();
            }} />
            <TrainingGrid />
        </MainTemplate>
    )
}

export default Home;