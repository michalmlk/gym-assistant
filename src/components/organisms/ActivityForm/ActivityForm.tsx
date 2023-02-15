import React, {FormEventHandler} from "react";
import {FormField} from "../../molecules/FormFields/FormFields";
import {Wrapper, StyledForm} from "./ActivityForm.styles";
import {useForm, FormState} from "../../../hooks/useForm";


interface ActivityFormProps {
    onSubmit: FormEventHandler<HTMLFormElement>
}

const ActivityForm: React.FC<ActivityFormProps> = ({onSubmit}) => {

    const initialFormState: FormState = {
        duration: '',
        intensity: '',
        activityType: '',
    }

    const {formState, handleInputChange} = useForm(initialFormState);

    return <Wrapper>
        <StyledForm onSubmit={(e) => {
            e.preventDefault()
            console.log(formState)
        }}>
            <h1>Your training:</h1>
            <FormField
                id='duration'
                label='Duration (min)'
                type='number' name='duration'
                onChange={handleInputChange}
            />
            <FormField
                id='intensity'
                label='Intensity (%)'
                type='number' name='intensity'
                onChange={handleInputChange}
            />
            <FormField
                id='type'
                label='Type'
                type='string' name='activityType'
                onChange={handleInputChange}
            />
            <button type='submit'>Save</button>
        </StyledForm>
    </Wrapper>
}

export default ActivityForm;