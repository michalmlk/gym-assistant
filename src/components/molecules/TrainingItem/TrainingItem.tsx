import React from 'react';
import { Wrapper, IntensityDisplayer, Buttons } from "./TrainingItem.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

interface TrainingItemProps {
    type: string,
    duration:string,
    intensity: string
}

const TrainingItem: React.FC<TrainingItemProps> = ({type, duration, intensity}) => {
    return (
        <Wrapper>
            <IntensityDisplayer>{intensity} %</IntensityDisplayer>
            <p>{type}</p>
            <p>{duration} min</p>
            <Buttons>
                <button>
                    <FontAwesomeIcon icon={faEdit} />
                </button>
                <button>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </Buttons>
        </Wrapper>
    )
}

export default TrainingItem;