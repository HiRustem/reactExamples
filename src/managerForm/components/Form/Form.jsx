import {React} from 'react'

import FormPresentation from './FormPresentation'

import {useDispatch, useSelector} from 'react-redux'

import {setFirstAnswer, setSecondAnswer, setThirdAnswer, setFourthAnswer, setFifthAnswer, setSixthAnswer, setSeventhAnswer, setEightAnswer, setNinthAnswer, setTenthAnswer, setEleventhAnswer, setTwelveAnswer, setThirteenAnswer, setFourteenAnswer, setFifteenAnswer, setSixteenAnswer, setEighteenAnswer, setNineteenAnswer, setTwentyAnswer} from '../../features/counter/FormReducer'

const Form = () => {

    const dispatch = useDispatch()

    const firstAnswer = useSelector((state) => state.form.firstAnswer)
    const secondAnswer = useSelector((state) => state.form.secondAnswer)
    const thirdAnswer = useSelector((state) => state.form.thirdAnswer)
    const fourthAnswer = useSelector((state) => state.form.fourthAnswer)
    const fifthAnswer = useSelector((state) => state.form.fifthAnswer)
    const sixthAnswer = useSelector((state) => state.form.sixthAnswer)
    const seventhAnswer = useSelector((state) => state.form.seventhAnswer)
    const eighthAnswer = useSelector((state) => state.form.eighthAnswer)
    const ninthAnswer = useSelector((state) => state.form.ninthAnswer)
    const tenthAnswer = useSelector((state) => state.form.tenthAnswer)
    const eleventhAnswer = useSelector((state) => state.form.eleventhAnswer)
    const twelveAnswer = useSelector((state) => state.form.twelveAnswer)
    const thirteenAnswer = useSelector((state) => state.form.thirteenAnswer)
    const fourteenAnswer = useSelector((state) => state.form.fourteenAnswer)
    const fifteenAnswer = useSelector((state) => state.form.fifteenAnswer)
    const sixteenAnswer = useSelector((state) => state.form.sixteenAnswer)
    const eighteenAnswer = useSelector((state) => state.form.eighteenAnswer)
    const nineteenAnswer = useSelector((state) => state.form.nineteenAnswer)
    const twentyAnswer = useSelector((state) => state.form.twentyAnswer)

    const firstAnswerOnChange = (event) => {
        dispatch(setFirstAnswer(event.target.value))
    }

    const secondAnswerOnChange = (event) => {
        dispatch(setSecondAnswer(event.target.value))
    }

    const thirdAnswerOnChange = (event) => {
        dispatch(setThirdAnswer(event.target.value))
    }

    const fourthAnswerOnChange = (event) => {
        dispatch(setFourthAnswer(event.target.value))
    }

    const fifthAnswerOnChange = (event) => {
        dispatch(setFifthAnswer(event.target.value))
    }

    const sixthAnswerOnChange = (event) => {
        dispatch(setSixthAnswer(event.target.value))
    }

    const seventhAnswerOnChange = (event) => {
        dispatch(setSeventhAnswer(event.target.value))
    }

    const eighthAnswerOnChange = (event) => {
        dispatch(setEightAnswer(event.target.value))
    }

    const ninthAnswerOnChange = (event) => {
        dispatch(setNinthAnswer(event.target.value))
    }

    const tenthAnswerOnChange = (event) => {
        dispatch(setTenthAnswer(event.target.value))
    }

    const eleventhAnswerOnChange = (event) => {
        dispatch(setEleventhAnswer(event.target.value))
    }

    const twelveAnswerOnChange = (event) => {
        dispatch(setTwelveAnswer(event.target.value))
    }

    const thirteenAnswerOnChange = (event) => {
        dispatch(setThirteenAnswer(event.target.value))
    }

    const fourteenAnswerOnChange = (event) => {
        dispatch(setFourteenAnswer(event.target.value))
    }

    const fifteenAnswerOnChange = (event) => {
        dispatch(setFifteenAnswer(event.target.value))
    }

    const sixteenAnswerOnChange = (event) => {
        dispatch(setSixteenAnswer(event.target.value))
    }

    const eighteenAnswerOnChange = (event) => {
        dispatch(setEighteenAnswer(event.target.value))
    }

    const nineteenAnswerOnChange = (event) => {
        dispatch(setNineteenAnswer(event.target.value))
    }

    const twentyAnswerOnChange = (event) => {
        dispatch(setTwentyAnswer(event.target.value))
    }

    const questions = [
        {
            id: 1,
            header: 'Как давно Вы работаете руководителем данного отдела?',
            onChange: firstAnswerOnChange,
            value: firstAnswer,
        },
        {
            id: 2,
            header: 'Сколько человек у Вас в подчинении?',
            onChange: secondAnswerOnChange,
            value: secondAnswer,
        },
        {
            id: 3,
            header: 'Как Вы думаете, какие качества необходимы хорошему руководителю?',
            onChange: thirdAnswerOnChange,
            value: thirdAnswer,
        },
        {
            id: 4,
            header: 'Как бы Вы описали себя как руководителя?',
            onChange: fourthAnswerOnChange,
            value: fourthAnswer,
        },
        {
            id: 5,
            header: 'В какой сфере деятельности Вы добились наибольшего успеха?',
            onChange: fifthAnswerOnChange,
            value: fifthAnswer,
        },
        {
            id: 6,
            header: 'Считаете ли Вы себя лучшим кандидатом на должность руководителя Вашего отдела? (Если да, то почему? Если нет, то кого Вы считаете лучшим кандидатом?)',
            onChange: sixthAnswerOnChange,
            value: sixthAnswer,
        },
        {
            id: 7,
            header: 'Сколько часов в неделю Вы посвящаете своей работе?',
            onChange: seventhAnswerOnChange,
            value: seventhAnswer,
        },
        {
            id: 8,
            header: 'Как бы Вы описали свой стиль управления или лидерства?',
            onChange: eighthAnswerOnChange,
            value: eighthAnswer,
        },
        {
            id: 9,
            header: 'Каковы Ваши сильные стороны как руководителя?',
            onChange: ninthAnswerOnChange,
            value: ninthAnswer,
        },
        {
            id: 10,
            header: 'Какие факторы Вы учитываете, оценивая работу Ваших сотрудников?',
            onChange: tenthAnswerOnChange,
            value: tenthAnswer,
        },
        {
            id: 11,
            header: 'Каковы три главных фактора улучшения командной работы и успеха?',
            onChange: eleventhAnswerOnChange,
            value: eleventhAnswer,
        },
        {
            id: 12,
            header: 'Вы когда-нибудь увольняли сотрудника? По какой причине?',
            onChange: twelveAnswerOnChange,
            value: twelveAnswer,
        },
        {
            id: 13,
            header: 'Как Вы встречаете и адаптируете новых сотрудников в своем отделе?',
            onChange: thirteenAnswerOnChange,
            value: thirteenAnswer,
        },
        {
            id: 14,
            header: 'По какому принципу Вы распределяете работу в своем отделе?',
            onChange: fourteenAnswerOnChange,
            value: fourteenAnswer,
        },
        {
            id: 15,
            header: 'Выстраиваете ли Вы личные отношения с подчиненными вне работы?',
            onChange: fifteenAnswerOnChange,
            value: fifteenAnswer,
        },
        {
            id: 16,
            header: 'По каким критериям Вы измеряете результаты Вашего отдела?',
            onChange: sixteenAnswerOnChange,
            value: sixteenAnswer,
        },
        {
            id: 17,
            header: 'Укажите, пожалуйста, результаты Вашего отдела за последние 3 года:',
        },
        {
            id: 18,
            header: 'Укажите, пожалуйста, план работы для Вашего отдела на год?',
            onChange: eighteenAnswerOnChange,
            value: eighteenAnswer,
        },
        {
            id: 19,
            header: 'Какие ресурсы Вам потребуются?',
            onChange: nineteenAnswerOnChange,
            value: nineteenAnswer,
        },
        {
            id: 20,
            header: 'Где и как Вы их планируете получить?',
            onChange: twentyAnswerOnChange,
            value: twentyAnswer,
        },
    
    ]


    return (
        <FormPresentation questions={questions}/>
    )
}

export default Form