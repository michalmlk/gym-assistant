import React from 'react'
import MainTemplate from "../components/templates/MainTemplate";
import ActivityForm from "../components/organisms/ActivityForm/ActivityForm";
import TrainingGrid from "../components/organisms/TrainingGrid/TrainingGrid";
import Chart from '../components/organisms/Chart/Chart';
import UserData from "../components/organisms/UserData";


const Home = () => {
    return (
        <MainTemplate>
            <ActivityForm />
            <TrainingGrid />
            <Chart />
            <UserData />
        </MainTemplate>
    )
}

export default Home;