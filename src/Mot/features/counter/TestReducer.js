import { createSlice } from '@reduxjs/toolkit'

import { keysArray } from '../../data/keys'

export const TestReducer = createSlice({
    name: 'test',
    initialState: {
        answers: [
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
        ],
        result: [0, 0, 0, 0, 0],
        resultString: ``,
    },
    reducers: {
        addAnswer: (state, action) => {

            const object = action.payload

            if (state.answers[object.id].length <= object.quantity - 1) {
                state.answers[object.id].push(object.answer)
            } else {
                alert('Недопустимое количество значений')
            }

        },
        deleteAnswer: (state, action) => {

            const object = action.payload

            state.answers[object.id].splice(state.answers[object.id].indexOf(object.variant), 1)
        },
        analysis: (state) => {
            let result = [0, 0, 0, 0, 0]

            for (let i = 0; i < state.answers.length; i++) {
                let answers = state.answers[i]
                let keys = keysArray[i]

                for (let a = 0; a < answers.length; a++) {
                    let answer = answers[a]

                    for (let k  = 0; k < keys.length; k++) {
                        if (keys[k].includes(answer)) {
                            result[k] = result[k] + 1
                        }
                    }
                }

            }
            
            state.result = result
        },
        createResultString: (state) => {

            const names = ['Инструментальный тип', 'Профессиональный тип', 'Патриотический тип', 'Хозяйский тип', 'Люмпензированный тип']

            let resultString = '<table style="border-collapse: collapse;"><tbody>'

            for (let i = 0; i < state.result.length; i++) {
                resultString += `<tr><td style="border: 2px solid black; padding: 4px;">${names[i]}</td><td style="border: 2px solid black; padding: 4px; text-align: end;">${state.result[i]}</td></tr>`
            }

            resultString += '</tbody></table>'

            state.resultString = resultString
        },
    },
})

export const { addAnswer, deleteAnswer, analysis, createResultString } = TestReducer.actions
export default TestReducer.reducer