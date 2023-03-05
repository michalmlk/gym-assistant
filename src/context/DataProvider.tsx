import React, { useState, useEffect, PropsWithChildren } from 'react';
import { Training, User } from "../model";
import uuid from 'react-uuid';
import axios from 'axios';

export const DataContext = React.createContext({
    trainings: [] as Array<Training>,
    userData: {} as User | undefined,
    addTraining: (training: Training) => {},
    removeTraining: (id: string) => {}
})


const DataProvider = (props: PropsWithChildren) => {
    const [trainings, setTrainings] = useState(Array<Training>);
    const [userData, setUserData] = useState<User>();

    useEffect(() => {
        axios.get('/trainings')
            .then(({data}) => setTrainings(data.trainings));
    }, [])

    useEffect(() => {
        axios.get('/user')
            .then(({data}) => setUserData(data.userData[0]))
    }, [])

    const addTraining = (training: Training) => {
        const newTraining: Training = {
            id: uuid(),
            duration: training.duration,
            intensity: training.intensity,
            activityType: training.activityType
        }
        setTrainings([newTraining, ...trainings]);
    }

    const removeTraining = (id: string) => {
        const filteredTrainings = trainings.filter(training => training.id !== id);
        console.log(filteredTrainings);
        setTrainings(filteredTrainings);
    }


    return (
        <DataContext.Provider
            value={{
            trainings,
            userData,
            addTraining,
            removeTraining,
            }}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataProvider;