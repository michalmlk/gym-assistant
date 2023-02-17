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
    value: string,
    id: string,
    label: string,
    name: string,
    type?: HTMLInputTypeAttribute,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
}

// interface FormSelectProps extends Omit <FormFieldProps, 'onChange'> {
//     options: Array<string>
//     onChange: (event: ChangeEvent<HTMLSelectElement>) => void,
// }

export const FormField: React.FC<FormFieldProps> = ({value, id, label, name, type, onChange}) => {
    return (
        <StyledFormField>
            <label htmlFor={id}>{label}</label>
            <input name={name} id={id} type={type} onChange={onChange} value={value}/>
        </StyledFormField>
    )
}