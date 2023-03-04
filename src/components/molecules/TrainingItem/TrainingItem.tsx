import React, { useContext } from 'react';
import { Wrapper, IntensityDisplayer, Buttons } from "./TrainingItem.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { DataContext } from "../../../context/DataProvider";
import { Training } from "../../../model";


const intensityFormatter = (intensity: number): string => {
    return intensity > 75 ? '#8aeba4' : intensity < 30 ? '#e35454' : '#fab811';
}

const TrainingItem: React.FC<Training> = ({ id, activityType, duration, intensity}) => {
    const { removeTraining } = useContext(DataContext);

    return (
        <Wrapper>
            <IntensityDisplayer intensity={intensityFormatter(intensity)}>{intensity} %</IntensityDisplayer>
            <p>{activityType}</p>
            <p>{duration} min</p>
            <Buttons>
                <button>
                    <FontAwesomeIcon icon={faEdit} />
                </button>
                <button>
                    <FontAwesomeIcon icon={faTrash} onClick={() => removeTraining(id)} />
                </button>
            </Buttons>
        </Wrapper>
    )
}

export default TrainingItem;