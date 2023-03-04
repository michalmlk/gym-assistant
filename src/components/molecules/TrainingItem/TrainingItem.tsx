import React, {useContext} from 'react';
import { Wrapper, IntensityDisplayer, Buttons } from "./TrainingItem.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import {DataContext} from "../../../context/DataProvider";

interface TrainingItemProps {
    id: string,
    type: string,
    duration: string,
    intensity: string
}

const intensityFormatter = (intensity: string): string => {
    return parseInt(intensity) > 75 ? '#8aeba4' : parseInt(intensity) < 30 ? '#e35454' : '#fab811';
}

const TrainingItem: React.FC<TrainingItemProps> = ({ id, type, duration, intensity}) => {
    const { removeTraining } = useContext(DataContext);

    return (
        <Wrapper>
            <IntensityDisplayer intensity={intensityFormatter(intensity)}>{intensity} %</IntensityDisplayer>
            <p>{type}</p>
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