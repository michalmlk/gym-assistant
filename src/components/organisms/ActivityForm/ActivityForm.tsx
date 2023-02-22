import React, {FormEventHandler, useContext} from "react";
import {FormField} from "../../molecules/FormFields/FormFields";
import {Wrapper, StyledForm} from "./ActivityForm.styles";
import {useForm, FormState} from "../../../hooks/useForm";
import {DataContext} from "../../../context/DataProvider";


interface ActivityFormProps {
    onSubmit: FormEventHandler<HTMLFormElement>
}

const ActivityForm: React.FC<ActivityFormProps> = () => {

    const initialFormState: FormState = {
        duration: '',
        intensity: '',
        activityType: '',
    }

    const {formValues, handleInputChange, handleClearForm} = useForm(initialFormState);
    // @ts-ignore
    const { addTraining, trainings } = useContext(DataContext);

    return <Wrapper>
        <StyledForm onSubmit={(e) => {
            e.preventDefault();
            addTraining(formValues);
            handleClearForm();
        }}>
            <h1>Your training:</h1>
            <FormField
                id='duration'
                label='Duration (min)'
                type='number'
                name='duration'
                onChange={handleInputChange}
                value={formValues.duration}
            />
            <FormField
                id='intensity'
                label='Intensity (%)'
                type='number'
                name='intensity'
                onChange={handleInputChange}
                value={formValues.intensity}
            />
            <FormField
                id='type'
                label='Type'
                type='string'
                name='activityType'
                onChange={handleInputChange}
                value={formValues.activityType}
            />
            <button type='submit'>Save</button>
        </StyledForm>
    </Wrapper>
}

export default ActivityForm;