import React, {HTMLInputTypeAttribute} from "react";
import {Path, UseFormRegister} from 'react-hook-form';
import {StyledFormField} from "./FormField.styles";

export interface IFormInputs {
    duration: string;
    intensity: string;
    activityType: string;
}

export interface FormFieldProps {
    id: string,
    label: Path<IFormInputs>,
    name: string,
    type?: HTMLInputTypeAttribute,
    register: UseFormRegister<IFormInputs>,
    required: boolean,
    pattern?: RegExp,
    maxLength?: number,
    min?: number,
    max?: number,
}

export const FormField: React.FC<FormFieldProps> = ({
        id,
        label,
        name,
        type,
        register,
        required,
        min,
        max,
        pattern,
        maxLength
    }) => {
    return (
        <StyledFormField>
            <label htmlFor={id}>{label}</label>
            <input {...register(label, {required, min, max, pattern, maxLength})} name={name} id={id} type={type}/>
        </StyledFormField>
    )
}