import React, { useState, useEffect, PropsWithChildren } from 'react';
import { Training } from "../model";
import uuid from 'react-uuid';
import axios from 'axios';

export const DataContext = React.createContext({
    trainings: [] as Array<Training>,
    addTraining: (training: Training) => {},
    removeTraining: (id: string) => {}
})


const DataProvider = (props: PropsWithChildren) => {
    const [trainings, setTrainings] = useState(Array<Training>);

    useEffect(() => {
        axios.get('/trainings')
            .then(({data}) => setTrainings(data.trainings));
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
            addTraining,
            removeTraining,
            }}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataProvider;