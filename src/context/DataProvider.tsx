import React, { useState, PropsWithChildren } from 'react';
import uuid from 'react-uuid';

type Training = {
    id: string,
    duration: string,
    intensity: string,
    activityType: string
}

export const DataContext = React.createContext({
    trainings: [] as Array<Training>,
    addTraining: (training: Training) => {},
    removeTraining: (type: string) => {}
})


const DataProvider = (props: PropsWithChildren) => {
    const [trainings, setTrainings] = useState(Array<Training>);

    const addTraining = (training: Training) => {
        const newTraining: Training = {
            id: uuid(),
            duration: `${training.duration} min`,
            intensity: `${training.intensity} %`,
            activityType: training.activityType
        }
        setTrainings([newTraining, ...trainings]);
    }

    const removeTraining = (type: string) => {
        const filteredTrainings = trainings.filter(training => training.activityType !== type);
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