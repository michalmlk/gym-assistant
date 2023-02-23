import React, {ChangeEvent, HTMLInputTypeAttribute} from "react";
import styled from "styled-components";
import { Path, UseFormRegister } from 'react-hook-form';

const StyledFormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin: 20px 0;

  label {
    font-size: 16px;
    font-weight: bold;
  }

  input, select {
    border-radius: 50px;
    border: 1px solid #ddd;
    padding: 0 15px;
    font-size: 18px;
    height: 40px;
  }
`;

export interface IFormValues {
    duration: string;
    intensity: string;
    activityType: string;
}

export interface FormFieldProps {
    value: string,
    id: string,
    label: Path<IFormValues>,
    name: string,
    type?: HTMLInputTypeAttribute,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
    register: UseFormRegister<IFormValues>
    required: boolean
}

export const FormField: React.FC<FormFieldProps> = (
    {value,
        id,
        label,
        name, type,
        onChange,
        register,
        required
    }) => {
    return (
        <StyledFormField>
            <label htmlFor={id}>{label}</label>
            <input {...register(label, {required})}
                   name={name}
                   id={id}
                   type={type}
                   onChange={onChange}
                   value={value}/>
        </StyledFormField>
    )
}