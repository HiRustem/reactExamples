import { createSlice } from '@reduxjs/toolkit'

export const PersonReducer = createSlice({
    name: 'person',
    initialState: {
        name: '',
        surname: '',
        middleName: '',
        isFinished: false,
    },
    reducers: {
        setPersonName: (state, action) => {
            state.name = action.payload
        },
        setPersonSurname: (state, action) => {
            state.surname = action.payload
        },
        setPersonMiddleName: (state, action) => {
            state.middleName = action.payload
        },
        setIsFinish: (state, action) => {
            state.isFinished = action.payload
        },
    }
})

export const { setPersonName, setPersonSurname, setPersonMiddleName, setIsFinish } = PersonReducer.actions

export default PersonReducer.reducer