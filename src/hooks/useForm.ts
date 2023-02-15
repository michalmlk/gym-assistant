import React, {useReducer} from 'react'

enum actionTypes {
    inputChange= 'INPUT_CHANGE',
    clearForm = 'CLEAR_FORM',
}

interface FormAction {
    type: actionTypes,
    field: string,
    payload: string

}
const initialFormState: FormState = {
    duration: '',
    intensity: '',
    activityType: '',
}

const reducer = (state: FormState, action: FormAction) => {
    const {type, payload} = action;
    switch (type) {
        case actionTypes.inputChange:
            return {
                ...state,
                [action.field]: payload
            };
        case actionTypes.clearForm:
            return {
                duration: '',
                intensity: '',
                activityType: ''
            }
        default:
            return state;
    }
}

export type FormState = {
    duration: string,
    intensity: string,
    activityType: string,
}

export const useForm = (initialValues: FormState) => {
    const [formState, dispatchFn] = useReducer(reducer, initialValues)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatchFn({
            type: actionTypes.inputChange,
            field: event.target.name,
            payload: event.target.value
        })
    };

    return {
        formState,
        handleInputChange,
    }
}