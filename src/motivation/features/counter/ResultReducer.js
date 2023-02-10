import { createSlice } from '@reduxjs/toolkit'

export const ResultReducer = createSlice({
    name: 'result',
    initialState: {
        resultObject: {
            firstFactor: 0,
            secondFactor: 0,
            thirdFactor: 0,
            fourthFactor: 0,
            fifthFactor: 0,
            sixthFactor: 0,
            seventhFactor: 0,
            eighthFactor: 0,
            ninthFactor: 0,
            tenthFactor: 0,
            eleventhFactor: 0,
            twelveFactor: 0,
        },
        resultString: '',
        finish: false,
    },
    reducers: {
        addResult: (state, action) => {
            let object = action.payload

            let objectId = object.id

            if (objectId === 1) {
                state.resultObject.firstFactor += parseInt(object.var1)
                state.resultObject.fifthFactor += parseInt(object.var2)
                state.resultObject.eighthFactor += parseInt(object.var3)
                state.resultObject.eleventhFactor += parseInt(object.var4)
            } else if (objectId === 2) {
                state.resultObject.thirdFactor += parseInt(object.var1)
                state.resultObject.sixthFactor += parseInt(object.var2)
                state.resultObject.twelveFactor += parseInt(object.var3)
                state.resultObject.secondFactor += parseInt(object.var4)
            } else if (objectId === 3) {
                state.resultObject.ninthFactor += parseInt(object.var1)
                state.resultObject.fourthFactor += parseInt(object.var2)
                state.resultObject.thirdFactor += parseInt(object.var3)
                state.resultObject.fifthFactor += parseInt(object.var4)
            } else if (objectId === 4) {
                state.resultObject.fourthFactor += parseInt(object.var1)
                state.resultObject.sixthFactor += parseInt(object.var2)
                state.resultObject.thirdFactor += parseInt(object.var3)
                state.resultObject.ninthFactor += parseInt(object.var4)
            } else if (objectId === 5) {
                state.resultObject.thirdFactor += parseInt(object.var1)
                state.resultObject.secondFactor += parseInt(object.var2)
                state.resultObject.firstFactor += parseInt(object.var3)
                state.resultObject.eleventhFactor += parseInt(object.var4)
            } else if (objectId === 6) {
                state.resultObject.secondFactor += parseInt(object.var1)
                state.resultObject.firstFactor += parseInt(object.var2)
                state.resultObject.twelveFactor += parseInt(object.var3)
                state.resultObject.sixthFactor += parseInt(object.var4)
            } else if (objectId === 7) {
                state.resultObject.thirdFactor += parseInt(object.var1)
                state.resultObject.fifthFactor += parseInt(object.var2)
                state.resultObject.twelveFactor += parseInt(object.var3)
                state.resultObject.sixthFactor += parseInt(object.var4)
            } else if (objectId === 8) {
                state.resultObject.ninthFactor += parseInt(object.var1)
                state.resultObject.eleventhFactor += parseInt(object.var2)
                state.resultObject.twelveFactor += parseInt(object.var3)
                state.resultObject.tenthFactor += parseInt(object.var4)
            } else if (objectId === 9) {
                state.resultObject.sixthFactor += parseInt(object.var1)
                state.resultObject.eleventhFactor += parseInt(object.var2)
                state.resultObject.ninthFactor += parseInt(object.var3)
                state.resultObject.eighthFactor += parseInt(object.var4)
            } else if (objectId === 10) {
                state.resultObject.fourthFactor += parseInt(object.var1)
                state.resultObject.firstFactor += parseInt(object.var2)
                state.resultObject.fifthFactor += parseInt(object.var3)
                state.resultObject.eleventhFactor += parseInt(object.var4)
            } else if (objectId === 11) {
                state.resultObject.secondFactor += parseInt(object.var1)
                state.resultObject.thirdFactor += parseInt(object.var2)
                state.resultObject.twelveFactor += parseInt(object.var3)
                state.resultObject.sixthFactor += parseInt(object.var4)
            } else if (objectId === 12) {
                state.resultObject.seventhFactor += parseInt(object.var1)
                state.resultObject.eleventhFactor += parseInt(object.var2)
                state.resultObject.sixthFactor += parseInt(object.var3)
                state.resultObject.secondFactor += parseInt(object.var4)
            } else if (objectId === 13) {
                state.resultObject.fifthFactor += parseInt(object.var1)
                state.resultObject.seventhFactor += parseInt(object.var2)
                state.resultObject.tenthFactor += parseInt(object.var3)
                state.resultObject.secondFactor += parseInt(object.var4)
            } else if (objectId === 14) {
                state.resultObject.eleventhFactor += parseInt(object.var1)
                state.resultObject.tenthFactor += parseInt(object.var2)
                state.resultObject.fourthFactor += parseInt(object.var3)
                state.resultObject.firstFactor += parseInt(object.var4)
            } else if (objectId === 15) {
                state.resultObject.eighthFactor += parseInt(object.var1)
                state.resultObject.ninthFactor += parseInt(object.var2)
                state.resultObject.sixthFactor += parseInt(object.var3)
                state.resultObject.thirdFactor += parseInt(object.var4)
            } else if (objectId === 16) {
                state.resultObject.seventhFactor += parseInt(object.var1)
                state.resultObject.thirdFactor += parseInt(object.var2)
                state.resultObject.firstFactor += parseInt(object.var3)
                state.resultObject.eighthFactor += parseInt(object.var4)
            } else if (objectId === 17) {
                state.resultObject.thirdFactor += parseInt(object.var1)
                state.resultObject.fifthFactor += parseInt(object.var2)
                state.resultObject.seventhFactor += parseInt(object.var3)
                state.resultObject.ninthFactor += parseInt(object.var4)
            } else if (objectId === 18) {
                state.resultObject.tenthFactor += parseInt(object.var1)
                state.resultObject.fourthFactor += parseInt(object.var2)
                state.resultObject.eleventhFactor += parseInt(object.var3)
                state.resultObject.eighthFactor += parseInt(object.var4)
            } else if (objectId === 19) {
                state.resultObject.sixthFactor += parseInt(object.var1)
                state.resultObject.eighthFactor += parseInt(object.var2)
                state.resultObject.firstFactor += parseInt(object.var3)
                state.resultObject.tenthFactor += parseInt(object.var4)
            } else if (objectId === 20) {
                state.resultObject.ninthFactor += parseInt(object.var1)
                state.resultObject.eighthFactor += parseInt(object.var2)
                state.resultObject.firstFactor += parseInt(object.var3)
                state.resultObject.secondFactor += parseInt(object.var4)
            } else if (objectId === 21) {
                state.resultObject.thirdFactor += parseInt(object.var1)
                state.resultObject.tenthFactor += parseInt(object.var2)
                state.resultObject.fourthFactor += parseInt(object.var3)
                state.resultObject.twelveFactor += parseInt(object.var4)
            } else if (objectId === 22) {
                state.resultObject.firstFactor += parseInt(object.var1)
                state.resultObject.secondFactor += parseInt(object.var2)
                state.resultObject.eighthFactor += parseInt(object.var3)
                state.resultObject.tenthFactor += parseInt(object.var4)
            } else if (objectId === 23) {
                state.resultObject.fourthFactor += parseInt(object.var1)
                state.resultObject.seventhFactor += parseInt(object.var2)
                state.resultObject.eighthFactor += parseInt(object.var3)
                state.resultObject.firstFactor += parseInt(object.var4)
            } else if (objectId === 24) {
                state.resultObject.secondFactor += parseInt(object.var1)
                state.resultObject.eighthFactor += parseInt(object.var2)
                state.resultObject.seventhFactor += parseInt(object.var3)
                state.resultObject.tenthFactor += parseInt(object.var4)
            } else if (objectId === 25) {
                state.resultObject.secondFactor += parseInt(object.var1)
                state.resultObject.eleventhFactor += parseInt(object.var2)
                state.resultObject.ninthFactor += parseInt(object.var3)
                state.resultObject.fourthFactor += parseInt(object.var4)
            } else if (objectId === 26) {
                state.resultObject.secondFactor += parseInt(object.var1)
                state.resultObject.fourthFactor += parseInt(object.var2)
                state.resultObject.twelveFactor += parseInt(object.var3)
                state.resultObject.ninthFactor += parseInt(object.var4)
            } else if (objectId === 27) {
                state.resultObject.sixthFactor += parseInt(object.var1)
                state.resultObject.eleventhFactor += parseInt(object.var2)
                state.resultObject.seventhFactor += parseInt(object.var3)
                state.resultObject.fifthFactor += parseInt(object.var4)
            } else if (objectId === 28) {
                state.resultObject.twelveFactor += parseInt(object.var1)
                state.resultObject.ninthFactor += parseInt(object.var2)
                state.resultObject.fifthFactor += parseInt(object.var3)
                state.resultObject.seventhFactor += parseInt(object.var4)
            } else if (objectId === 29) {
                state.resultObject.twelveFactor += parseInt(object.var1)
                state.resultObject.fifthFactor += parseInt(object.var2)
                state.resultObject.fourthFactor += parseInt(object.var3)
                state.resultObject.eighthFactor += parseInt(object.var4)
            } else if (objectId === 30) {
                state.resultObject.fourthFactor += parseInt(object.var1)
                state.resultObject.sixthFactor += parseInt(object.var2)
                state.resultObject.fifthFactor += parseInt(object.var3)
                state.resultObject.ninthFactor += parseInt(object.var4)
            } else if (objectId === 31) {
                state.resultObject.firstFactor += parseInt(object.var1)
                state.resultObject.thirdFactor += parseInt(object.var2)
                state.resultObject.seventhFactor += parseInt(object.var3)
                state.resultObject.tenthFactor += parseInt(object.var4)
            } else if (objectId === 32) {
                state.resultObject.seventhFactor += parseInt(object.var1)
                state.resultObject.tenthFactor += parseInt(object.var2)
                state.resultObject.eleventhFactor += parseInt(object.var3)
                state.resultObject.twelveFactor += parseInt(object.var4)
            } else if (objectId === 33) {
                state.resultObject.tenthFactor += parseInt(object.var1)
                state.resultObject.twelveFactor += parseInt(object.var2)
                state.resultObject.fifthFactor += parseInt(object.var3)
                state.resultObject.seventhFactor += parseInt(object.var4)
            }
        },
        addResultString: (state) => {
            let resultObject = state.resultObject

            let newResultString = ''

            const parameters = ["Высокий заработок", "Физические условия работы", "Потребность в инструкциях", "Социальные контакты", "Взаимоотношения", "Признание", "Стремление к достижениям", "Власть и влиятельность", "Разнообразие и перемены", "Креативность", "Самосовершенствование", "Интересная и полезная работа"]

            const values = [resultObject.firstFactor, resultObject.secondFactor, resultObject.thirdFactor, resultObject.fourthFactor, resultObject.fifthFactor, resultObject.sixthFactor, resultObject.seventhFactor, resultObject.eighthFactor, resultObject.ninthFactor, resultObject.tenthFactor, resultObject.eleventhFactor, resultObject.twelveFactor]

            newResultString += `<table style="border-collapse: collapse;"><tbody>`

            for (let i = 0; i < parameters.length; i++) {
                newResultString += `<tr><td style="border: 2px solid black; font-weight: bold; padding: 4px;">${parameters[i]}</td><td style="border: 2px solid black; padding: 4px;">${values[i]}</td></tr>`
            }

            newResultString += '</tbody></table>'

            state.resultString = newResultString
        },
        setFinish: (state, action) => {
            let finish = action.payload

            state.finish = finish
        }
    }
})

export const { addResult, addResultString, setFinish } = ResultReducer.actions

export default ResultReducer.reducer