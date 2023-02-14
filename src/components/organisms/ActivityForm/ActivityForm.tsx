import React, {FormEventHandler, useState} from "react";
import {FormField, FormSelect} from "../../molecules/FormFields/FormFields";
import {Wrapper, StyledForm} from "./ActivityForm.styles";

const activityOptions = ['Running', 'Swimming', 'Gym', 'Cardio'];
const intensityOptions = ['25%', '50%', '75%', '100%'];

interface ActivityFormProps {
    onSubmit: FormEventHandler<HTMLFormElement>
}

const ActivityForm: React.FC<ActivityFormProps> = ({onSubmit}) => {

    const [formValues, setFormValues] = useState({
        duration: '',
        intensity: '',
        type: '',
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value,
        })
    };

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value,
        })
    };

    return <Wrapper>
        <StyledForm onSubmit={onSubmit}>
            <h1>Your training:</h1>
            <FormField
                id='duration'
                label='Duration (min)'
                type='number' name='duration'
                onChange={handleInputChange}
            />
            <FormSelect
                id='intensity'
                label='Intensity'
                options={intensityOptions}
                name='intensity'
                onChange={handleSelectChange}
            />
            <FormSelect
                id='type'
                label='Type'
                options={activityOptions}
                name='type'
                onChange={handleSelectChange}
            />
            <button type='submit'>Save</button>
        </StyledForm>
    </Wrapper>
}
export default ActivityForm;