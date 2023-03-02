import React, { useContext } from "react";
import { StyledTrainings, Wrapper } from "./TrainingGrid.styles";
import { DataContext } from "../../../context/DataProvider";
import TrainingItem from '../../molecules/TrainingItem/TrainingItem';

const TrainingGrid = () => {
    const {trainings} = useContext(DataContext);

    return (
        <Wrapper>
            <StyledTrainings>
                {trainings.length ?
                    trainings.map(training =>
                            <TrainingItem
                                type={training.activityType}
                                duration={training.duration}
                                intensity={training.intensity}
                            />)
                    : <h1>No trainings</h1>
                }
            </StyledTrainings>
        </Wrapper>
    )
}

export default TrainingGrid;