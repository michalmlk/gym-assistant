import React from 'react';

type Training = {
    duration: string,
    intensity: string,
    type: string
}

const dataContext = React.createContext({
    trainings: Array<Training>,
    addTraining: () => {},
    removeTraining: () => {}
})