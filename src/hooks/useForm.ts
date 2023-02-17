import React, { useReducer } from 'react';

enum actionTypes {
    inputChange= 'INPUT_CHANGE',
    clearForm = 'CLEAR_FORM',
}

export type FormState = {
    duration: string,
    intensity: string,
    activityType: string
}

const reducer = (state: FormState, action: any) => {
    switch (action.type) {
        case actionTypes.inputChange:
            return {
                ...state,
                [action.field]: action.payload
            };
        case actionTypes.clearForm:
            return {
                ...action.initialValues
            }
        default:
            return state;
    }
}

export const useForm = (initialValues: FormState) => {
    const [formValues, dispatchFn] = useReducer(reducer, initialValues)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatchFn({
            type: actionTypes.inputChange,
            field: event.target.name,
            payload: event.target.value
        })
    };

    const handleClearForm = () => {
        dispatchFn({
            type: actionTypes.clearForm,
            initialValues
        })
    }

    return {
        formValues,
        handleInputChange,
        handleClearForm
    }
}