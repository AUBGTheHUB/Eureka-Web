import { ADD_EDITED_FORM, EMPTY_EDITED_FORMS, SET_ERROR } from "./actionTypes"

export const addEditedForm = (form) => {
    return {
        type: ADD_EDITED_FORM,
        data: form
    }
}
export const emptyEditedForms = () => {
    return {
        type: EMPTY_EDITED_FORMS
    }
}
export const setError = (error) => {
    return {
        type: SET_ERROR,
        data: error
    }
}