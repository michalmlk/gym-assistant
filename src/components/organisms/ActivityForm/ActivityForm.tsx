import React, {FormEventHandler, useContext} from "react";
import {FormField} from "../../molecules/FormFields/FormFields";
import {Wrapper, StyledForm, Error} from "./ActivityForm.styles";
import {DataContext} from "../../../context/DataProvider";
import {useForm, SubmitHandler} from 'react-hook-form';
import uuid from "react-uuid";


interface ActivityFormProps {
    onSubmit: FormEventHandler<HTMLFormElement>
}

interface IFormValues {
    duration: string,
    intensity: string,
    activityType: string
}

const ActivityForm: React.FC<ActivityFormProps> = () => {

    const initialFormState: IFormValues = {
        duration: '',
        intensity: '',
        activityType: '',
    }

    const {addTraining} = useContext(DataContext);
    const {register, handleSubmit, reset, formState: {errors}} = useForm<IFormValues>({
        defaultValues: initialFormState
    });

    const onSubmit: SubmitHandler<IFormValues> = ({duration, intensity, activityType}) => {
        const formValues = {
            id: uuid(),
            duration,
            intensity,
            activityType
        }
        addTraining(formValues)
        reset()
    }

    return <Wrapper>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <h1>Your training:</h1>
            <FormField
                id='duration'
                label='duration'
                type='number'
                name='duration'
                register={register}
                required
            />
            {errors.duration && <Error>Duration is required</Error>}
            <FormField
                id='intensity'
                label='intensity'
                type='number'
                name='intensity'
                register={register}
                required
                min={1}
                max={100}
            />
            {errors.intensity && <Error>Intensity is required and must be between 1-100 (%)</Error>}
            <FormField
                id='type'
                label='activityType'
                type='string'
                name='activityType'
                register={register}
                required
                pattern={/^[A-Za-z]+$/i}
            />
            {errors.activityType && <Error>Type is required and should not contains any numbers</Error>}
            <button type='submit'>Save</button>
        </StyledForm>
    </Wrapper>
}

export default ActivityForm;