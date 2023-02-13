import React, {ChangeEvent, HTMLInputTypeAttribute} from "react";
import styled from "styled-components";

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

export interface FormFieldProps {
    id: string,
    label: string,
    name: string,
    type?: HTMLInputTypeAttribute,
    onChange: ChangeEvent<HTMLInputElement>
}

interface FormSelectProps extends FormFieldProps {
    options: Array<string>
}

export const FormField: React.FC<FormFieldProps> = ({id, label, name, type, onChange}) => {
    return (
        <StyledFormField>
            <label htmlFor={id}>{label}</label>
            <input name={name} id={id} type={type} onChange={onChange}/>
        </StyledFormField>
    )
}

export const FormSelect: React.FC<FormSelectProps> = ({id, label, name, options}) => {
    return (
        <StyledFormField>
            <label htmlFor={id}>{label}</label>
            <select name={name} id={id} defaultValue={'Select'}>
                <option>Select</option>
                {
                    options.map(option => <option
                        key={option}
                        value={option}>
                        {option}
                    </option>)
                }
            </select>
        </StyledFormField>
    )
}