import React, {FormEventHandler, useContext} from "react";
import {FormField} from "../../molecules/FormFields/FormFields";
import {Wrapper, StyledForm} from "./ActivityForm.styles";
import {useForm, FormState} from "../../../hooks/useForm";
import {DataContext} from "../../../context/DataProvider";
import { useForm as useFormHook, SubmitHandler } from 'react-hook-form';
import { IFormValues } from "../../molecules/FormFields/FormFields";
import uuid from "react-uuid";


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
    const { addTraining } = useContext(DataContext);
    const { register, handleSubmit } = useFormHook<IFormValues>();

    const onSubmit: SubmitHandler<IFormValues> = data => {
        const formValues = {
            id: uuid(),
            duration: data.duration,
            intensity: data.intensity,
            activityType: data.activityType,
        }
        addTraining(formValues)
        handleClearForm()
    }

    return <Wrapper>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <h1>Your training:</h1>
            <FormField
                id='duration'
                label='duration'
                type='number'
                name='duration'
                onChange={handleInputChange}
                value={formValues.duration}
                register={register}
                required
            />
            <FormField
                id='intensity'
                label='intensity'
                type='number'
                name='intensity'
                onChange={handleInputChange}
                value={formValues.intensity}
                register={register}
                required
            />
            <FormField
                id='type'
                label='activityType'
                type='string'
                name='activityType'
                onChange={handleInputChange}
                value={formValues.activityType}
                register={register}
                required
            />
            <button type='submit'>Save</button>
        </StyledForm>
    </Wrapper>
}

export default ActivityForm;