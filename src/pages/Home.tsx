import React from 'react'
import MainTemplate from "../components/templates/MainTemplate";
import ActivityForm from "../components/organisms/ActivityForm/ActivityForm";
import TrainingGrid from "../components/organisms/TrainingGrid/TrainingGrid";
import Chart from '../components/organisms/Chart/Chart';


const Home = () => {
    return (
        <MainTemplate>
            <ActivityForm />
            <TrainingGrid />
            <Chart />
        </MainTemplate>
    )
}

export default Home;