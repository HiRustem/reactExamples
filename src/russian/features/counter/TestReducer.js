import { createSlice } from '@reduxjs/toolkit'

export const TestReducer = createSlice({
    name: 'test',
    initialState: {
        personName: "",
        personSurname: "",
        personMiddleName: "",
        randomVariant: 0,
        firstQuestion: "",
        secondQuestion: "",
        thirdQuestion: "",
        fourthQuestion: "",
        fifthQuestion: "",
        sixthQuestion: "",
        seventhQuestion: "",
        eighthQuestion: "",
        ninthQuestion: "",
        tenthQuestion: "",
        eleventhQuestion: "",
        twelveQuestion: "",
        thirteenQuestion: "",
        fourteenQuestion: "",
        fifteenQuestion: "",
        result: "",
        isFinished: false,
        isEnd: false,
    },
    reducers: {
        setPersonName: (state, action) => {
            state.personName = action.payload
        },
        setPersonSurname: (state, action) => {
            state.personSurname = action.payload
        },
        setPersonMiddleName: (state, action) => {
            state.personMiddleName = action.payload
        },
        setRandomVariant: (state, action) => {
            state.randomVariant = action.payload
        },
        setFirstQuestion: (state, action) => {
            state.firstQuestion = action.payload
        },
        setSecondQuestion: (state, action) => {
            state.secondQuestion = action.payload
        },
        setThirdQuestion: (state, action) => {
            state.thirdQuestion = action.payload
        },
        setFourthQuestion: (state, action) => {
            state.fourthQuestion = action.payload
        },
        setFifthQuestion: (state, action) => {
            state.fifthQuestion = action.payload
        },
        setSixthQuestion: (state, action) => {
            state.sixthQuestion = action.payload
        },
        setSeventhQuestion: (state, action) => {
            state.seventhQuestion = action.payload
        },
        setEighthQuestion: (state, action) => {
            state.eighthQuestion = action.payload
        },
        setNinthQuestion: (state, action) => {
            state.ninthQuestion = action.payload
        },
        setTenthQuestion: (state, action) => {
            state.tenthQuestion = action.payload
        },
        setEleventhQuestion: (state, action) => {
            state.eleventhQuestion = action.payload
        },
        setTwelveQuestion: (state, action) => {
            state.twelveQuestion = action.payload
        },
        setThirteenQuestion: (state, action) => {
            state.thirteenQuestion = action.payload
        },
        setFourteenQuestion: (state, action) => {
            state.fourteenQuestion = action.payload
        },
        setFifteenQuestion: (state, action) => {
            state.fifteenQuestion = action.payload
        },
        setIsFinished: (state, action) => {
            state.isFinished = action.payload
        },
        setResult: (state, action) => {
            state.result += action.payload
        },
        setIsEnd: (state, action) => {
            state.isEnd = action.payload
        },
    }
})

export const {setPersonName, setPersonSurname, setPersonMiddleName, setRandomVariant, setFirstQuestion, setSecondQuestion, setThirdQuestion, setFourthQuestion, setFifthQuestion, setSixthQuestion, setSeventhQuestion, setEighthQuestion, setNinthQuestion, setTenthQuestion, setEleventhQuestion, setTwelveQuestion, setThirteenQuestion, setFourteenQuestion, setFifteenQuestion, setResult, setIsFinished, setIsEnd} = TestReducer.actions

export default TestReducer.reducer