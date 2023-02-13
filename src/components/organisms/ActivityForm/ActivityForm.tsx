import React, {useState} from "react";
import {FormField, FormSelect, FormFieldProps } from "../../molecules/FormFields/FormFields";
import {Wrapper, StyledForm} from "./ActivityForm.styles";

const activityOptions = ['Running', 'Swimming', 'Gym', 'Cardio'];
const intensityOptions = ['25%', '50%', '75%', '100%'];

interface ActivityFormProps {
    handleSubmit: React.FormEvent<HTMLFormElement>
}

const ActivityForm: React.FC<ActivityFormProps> = () => {

    const [formValues, setFormValues] = useState({});

    const handleInputChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement
        console.log(e.currentTarget.value);
        setFormValues({
            ...formValues,
            [e.currentTarget.name]: target.value
        })
    }

    return <Wrapper>
        <StyledForm onSubmit={() => console.log(formValues)}>
            <h1>Your training:</h1>
            <FormField
                id='duration'
                label='Duration (m)'
                type='number' name='duration'
                onChange={handleInputChange}/>
            <FormSelect
                id='intensity'
                label='Intensity'
                options={intensityOptions}
                name='intensity'
                onChange={handleInputChange}/>
            <FormSelect
                id='type'
                label='Type'
                options={activityOptions}
                name='type'
                onChange={handleInputChange}/>
            <button type='submit'>Save</button>
        </StyledForm>
    </Wrapper>
}
export default ActivityForm;