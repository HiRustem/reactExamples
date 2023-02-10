import { createSlice } from '@reduxjs/toolkit'

export const FormReducer = createSlice({
    name: 'form',
    initialState: {
        firstAnswer: '',
        secondAnswer: '',
        thirdAnswer: '',
        fourthAnswer: '',
        fifthAnswer: '',
        sixthAnswer: '',
        seventhAnswer: '',
        eighthAnswer: '',
        ninthAnswer: '',
        tenthAnswer: '',
        eleventhAnswer: '',
        twelveAnswer: '',
        thirteenAnswer: '',
        fourteenAnswer: '',
        fifteenAnswer: '',
        sixteenAnswer: '',
        seventeenAnswer: [
            {
                name: 'критерии',
                firstValue: '',
                secondValue: '',
                thirdValue: '',
                fourthValue: '',
                fifthValue: '',
            },
            {
                name: '2022г',
                firstValue: '',
                secondValue: '',
                thirdValue: '',
                fourthValue: '',
                fifthValue: '',
            },
            {
                name: '2021г',
                firstValue: '',
                secondValue: '',
                thirdValue: '',
                fourthValue: '',
                fifthValue: '',
            },
            {
                name: '2020г',
                firstValue: '',
                secondValue: '',
                thirdValue: '',
                fourthValue: '',
                fifthValue: '',
            },
        ],
        eighteenAnswer: '',
        nineteenAnswer: '',
        twentyAnswer: '',
        result: '',
        isFinished: false,
    },
    reducers: {
        setFirstAnswer: (state, action) => {
            state.firstAnswer = action.payload
        },
        setSecondAnswer: (state, action) => {
            state.secondAnswer = action.payload
        },
        setThirdAnswer: (state, action) => {
            state.thirdAnswer = action.payload
        },
        setFourthAnswer: (state, action) => {
            state.fourthAnswer = action.payload
        },
        setFifthAnswer: (state, action) => {
            state.fifthAnswer = action.payload
        },
        setSixthAnswer: (state, action) => {
            state.sixthAnswer = action.payload
        },
        setSeventhAnswer: (state, action) => {
            state.seventhAnswer = action.payload
        },
        setEightAnswer: (state, action) => {
            state.eighthAnswer = action.payload
        },
        setNinthAnswer: (state, action) => {
            state.ninthAnswer = action.payload
        },
        setTenthAnswer: (state, action) => {
            state.tenthAnswer = action.payload
        },
        setEleventhAnswer: (state, action) => {
            state.eleventhAnswer = action.payload
        },
        setTwelveAnswer: (state, action) => {
            state.twelveAnswer = action.payload
        },
        setThirteenAnswer: (state, action) => {
            state.thirteenAnswer = action.payload
        },
        setFourteenAnswer: (state, action) => {
            state.fourteenAnswer = action.payload
        },
        setFifteenAnswer: (state, action) => {
            state.fifteenAnswer = action.payload
        },
        setSixteenAnswer: (state, action) => {
            state.sixteenAnswer = action.payload
        },
        addSeventeenAnswer: (state, action) => {
            const headers = ["критерии", "2022г", "2021г", "2020г"]

            const object = action.payload

            state.seventeenAnswer[object.index] = {
                name: headers[object.index],
                firstValue: object.firstInput,
                secondValue: object.secondInput,
                thirdValue: object.thirdInput,
                fourthValue: object.fourthInput,
                fifthValue: object.fifthInput,
            }
        },
        deleteSeventeenAnswer: (state, action) => {
            if (action.payload !== 0) {
                const headers = ["критерии", "2022г", "2021г", "2020г"]

                state.seventeenAnswer[action.payload - 1] = {
                    name: headers[action.payload - 1],
                    firstValue: '',
                    secondValue: '',
                    thirdValue: '',
                    fourthValue: '',
                    fifthValue: '',
                }
            }
            
        },
        setEighteenAnswer: (state, action) => {
            state.eighteenAnswer = action.payload
        },
        setNineteenAnswer: (state, action) => {
            state.nineteenAnswer = action.payload
        },
        setTwentyAnswer: (state, action) => {
            state.twentyAnswer = action.payload
        },
        analysis: (state) => {
            let result = ''

            const questions = ["1. Как давно Вы работаете руководителем данного отдела?", "2. Сколько человек у Вас в подчинении?", "3. Как Вы думаете, какие качества необходимы хорошему руководителю?", "4. Как бы Вы описали себя как руководителя?", "5. В какой сфере деятельности Вы добились наибольшего успеха?", "6. Считаете ли Вы себя лучшим кандидатом на должность руководителя Вашего отдела?", "7. Сколько часов в неделю Вы посвящаете своей работе?", "8. Как бы Вы описали свой стиль управления или лидерства?", "9. Каковы Ваши сильные стороны как руководителя?", "10. Какие факторы Вы учитываете, оценивая работу Ваших сотрудников?", "11. Каковы три главных фактора улучшения командной работы и успеха?", "12. Вы когда-нибудь увольняли сотрудника? По какой причине?", "13. Как Вы встречаете и адаптируете новых сотрудников в своем отделе?", "14. По какому принципу Вы распределяете работу в своем отделе?", "15. Выстраиваете ли Вы личные отношения с подчиненными вне работы?", "16. По каким критериям Вы измеряете результаты Вашего отдела?", "17. Укажите, пожалуйста, результаты Вашего отдела за последние 3 года:", "18. Укажите, пожалуйста, план работы для Вашего отдела на год?", "19. Какие ресурсы Вам потребуются?", "20. Где и как Вы их планируете получить?"]

            const answers = [state.firstAnswer, state.secondAnswer, state.thirdAnswer, state.fourthAnswer, state.fifthAnswer, state.sixthAnswer, state.seventhAnswer, state.eighthAnswer, state.ninthAnswer, state.tenthAnswer, state.eleventhAnswer, state.twelveAnswer, state.thirteenAnswer, state.fourteenAnswer, state.fifteenAnswer, state.sixteenAnswer, state.seventeenAnswer, state.eighteenAnswer, state.nineteenAnswer, state.twentyAnswer]

            for (let i = 0; i < questions.length; i++) {
                if (i !== 16) {
                    result += `<span style="font-weight: bold;">${questions[i]}</span><br/><br/>${answers[i]}<br/><br/>`
                } else {
                    result += `<span style="font-weight: bold;">${questions[i]}</span><table style="border-collapse: collapse;"><tbody>`

                    const array = answers[i]

                    for (let k = 0; k < array.length; k++) {
                        result += `<tr><td style="border: 2px solid black; padding: 4px; font-weight: bold;">${array[k].name}</td><td style="border: 2px solid black; padding: 4px;">${array[k].firstValue}</td><td style="border: 2px solid black; padding: 4px;">${array[k].secondValue}</td><td style="border: 2px solid black; padding: 4px;">${array[k].thirdValue}</td><td style="border: 2px solid black; padding: 4px;">${array[k].fourthValue}</td><td style="border: 2px solid black; padding: 4px;">${array[k].fifthValue}</td></tr>`
                    }

                    result += '</tbody></table><br/><br/>'
                }
            }

            state.result = result

        },
        setIsFinished: (state, action) => {
            state.isFinished = action.payload
        },
    }
})

export const {setFirstAnswer, setSecondAnswer, setThirdAnswer, setFourthAnswer, setFifthAnswer, setSixthAnswer, setSeventhAnswer, setEightAnswer, setNinthAnswer, setTenthAnswer, setEleventhAnswer, setTwelveAnswer, setThirteenAnswer, setFourteenAnswer, setFifteenAnswer, setSixteenAnswer, addSeventeenAnswer, deleteSeventeenAnswer, setEighteenAnswer, setNineteenAnswer, setTwentyAnswer, analysis, setIsFinished} = FormReducer.actions

export default FormReducer.reducer