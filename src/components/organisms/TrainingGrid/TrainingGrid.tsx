import React, { useContext } from "react";
import { StyledTrainings, Wrapper } from "./TrainingGrid.styles";
import { DataContext } from "../../../context/DataProvider";
import TrainingItem from '../../molecules/TrainingItem/TrainingItem';
import Scrollbars from "react-custom-scrollbars-2";

const TrainingGrid = () => {
    const { trainings } = useContext(DataContext);

    return (
        <Wrapper>
            <StyledTrainings>
                <Scrollbars>
                    {trainings.length ?
                        trainings.map(training =>
                            <TrainingItem
                                key={training.id}
                                id={training.id}
                                activityType={training.activityType}
                                duration={training.duration}
                                intensity={training.intensity}
                            />)
                        : <h1>No trainings</h1>
                    }
                </Scrollbars>
            </StyledTrainings>
        </Wrapper>
    )
}

export default TrainingGrid;