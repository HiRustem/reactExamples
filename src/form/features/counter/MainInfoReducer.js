import {createSlice} from '@reduxjs/toolkit'

export const MainInfoReducer = createSlice({
    name: 'mainInfo',
    initialState: {
        name: "",
        date: "",
        isMarried: "",
        children: "",
        placeOfBirth: "",
        registration: "",
        placeOfResidence: "",
        telephone: "",
        activity: "",
        post: "",
        minimum: "",
        sources: "",
        sourcesValue: "",
        educations: [
            {
                firstColumn: "Год поступления и окончания",
                secondColumn: "Учебное заведение",
                thirdColumn: "Факультет, специальность",
            },
        ],
        military: "",
        jobs: [
            {
                firstColumn: "Период работы (м.г/м.г)",
                secondColumn: "Должность, место работы",
                thirdColumn: "Причина поиска (смены) работы",
            }
        ],
        duties: "",
        additionalInfo: [
            {
                firstColumn: "Степень владения ПК (программы)",
                secondColumn: "Степень владения иностранными языками (указать какими)",
                thirdColumn: "Наличие водительских прав и а/м",
                fourthColumn: "Судимость (есть, нет), статья",
            }
        ],
        family: [
            {
                firstColumn: "Степень родства",
                secondColumn: "Ф.И.О.",
                thirdColumn: "Дата рождения",
                fourthColumn: "Место работы, должность",
                fifthColumn: "Место жительства",
            }
        ],
        firstQuestion: "",
        secondQuestion: "",
        thirdQuestion: "",
        fourthQuestion: "",
        fifthQuestion: "",
        sixthQuestion: "",
        seventhQuestion: "",
        eighthQuestion: "",
        ninthQuestion: "",
        firstCheckboxArray: [],
        secondCheckboxArray: [],
        thirdCheckboxArray: [],
        tenthQuestion: "",
        eleventhQuestion: "",
        formDate: "",
        result: "",
        isFinished: false,
    },
    reducers: {
        setName: (state, action) => {
            state.name = action.payload
        },
        setDate: (state, action) => {
            state.date = action.payload
        },
        setIsMarried: (state, action) => {
            state.isMarried = action.payload
        },
        setChildren: (state, action) => {
            state.children = action.payload
        },
        setPlaceOfBirth: (state, action) => {
            state.placeOfBirth = action.payload
        },
        setRegistration: (state, action) => {
            state.registration = action.payload
        },
        setPlaceOfResidence: (state, action) => {
            state.placeOfResidence = action.payload
        },
        setTelephone: (state, action) => {
            state.telephone = action.payload
        },
        setActivity: (state, action) => {
            state.activity = action.payload
        },
        setPost: (state, action) => {
            state.post = action.payload
        },
        setMinimum: (state, action) => {
            state.minimum = action.payload
        },
        setSources: (state, action) => {
            state.sources = action.payload
        },
        setSourceValue: (state, action) => {
            state.sourcesValue = action.payload
        },
        addEducation: (state, action) => {
            state.educations.push(action.payload)
        },
        deleteEducation: (state) => {
            if (state.educations.length > 1) {
                state.educations.pop()
            }
        },
        setMilitary: (state, action) => {
            state.military = action.payload
        },
        addJob: (state, action) => {
            state.jobs.push(action.payload)
        },
        deleteJob: (state) => {
            if (state.jobs.length > 1) {
                state.jobs.pop()
            }
        },
        setDuties: (state, action) => {
            state.duties = action.payload
        },
        addAdditionalInfo: (state, action) => {
            if (state.additionalInfo.length === 1) {
                state.additionalInfo.push(action.payload)
            } else {
                alert("Нельзя добавить больше одного варианта")
            }
        },
        deleteAdditionalInfo: (state) => {
            if (state.additionalInfo.length > 1) {
                state.additionalInfo.pop()
            }
        },
        addFamily: (state, action) => {
            state.family.push(action.payload)
        },
        deleteFamily: (state) => {
            if (state.family.length > 1) {
                state.family.pop()
            }
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
        addToFirstCheckboxArray: (state, action) => {
            state.firstCheckboxArray.push(action.payload)
        },
        deleteFromFirstCheckboxArray: (state, action) => {
            let find = state.firstCheckboxArray.find(f => f === action.payload)

            state.firstCheckboxArray.splice(state.firstCheckboxArray.indexOf(find), 1)
        },
        addToSecondCheckboxArray: (state, action) => {
            state.secondCheckboxArray.push(action.payload)
        },
        deleteFromSecondCheckboxArray: (state, action) => {
            let find = state.secondCheckboxArray.find(f => f === action.payload)

            state.secondCheckboxArray.splice(state.secondCheckboxArray.indexOf(find), 1)
        },
        addToThirdCheckboxArray: (state, action) => {
            state.thirdCheckboxArray.push(action.payload)
        },
        deleteFromThirdCheckboxArray: (state, action) => {
            let find = state.thirdCheckboxArray.find(f => f === action.payload)

            state.thirdCheckboxArray.splice(state.thirdCheckboxArray.indexOf(find), 1)
        },
        setTenthQuestion: (state, action) => {
            state.tenthQuestion = action.payload
        },
        setEleventhQuestion: (state, action) => {
            state.eleventhQuestion = action.payload
        },
        setFormDate: (state, action) => {
            state.formDate = action.payload
        },
        analysis: (state) => {
            //Основные данные

            const mainInfo = [state.name, state.date, state.isMarried, state.children, state.placeOfBirth, state.registration, state.placeOfResidence, state.telephone, state.activity, state.post, state.minimum]
            const mainInfoNames = ['ФИО', 'Дата рождения', 'Семейное положение', 'Дети', 'Место рождения', 'Прописка', 'Место проживания', 'Контактные телефоны', 'Направление деятельности, которое интересует', 'Должностная позиция, на которую претендует', 'Минимальный уровень заработной платы']

            let result = `<table style="border-collapse: collapse;"><tbody>`

            for (let i = 0; i < mainInfo.length; i++) {
                result += `<tr><th style="border: 2px solid black; padding: 4px; text-align: start;">${mainInfoNames[i]}</th><td style="border: 2px solid black; padding: 4px;">${mainInfo[i]}</td></tr>`
            }

            //Добавление источников
            const sources = state.sources
            const sourcesValue = state.sourcesValue

            result += `<th style="border: 2px solid black; padding: 4px; text-align: start;">Откуда узнал о вакансии</th>`


            if (sources === "другой вариант") {
                result += `<td style="border: 2px solid black; padding: 4px;">${sourcesValue}</td>`
            } else {
                result += `<td style="border: 2px solid black; padding: 4px;">${sources}</td>`
            }

            result += `</tr><tr><th style="border: 2px solid black; padding: 4px; text-align: start;">Наличие военного билета</th><td style="border: 2px solid black; padding: 4px;">${state.military}</td></tr></tbody></table>`

            //Добавление информации об образовании

            result += `<br/><span style="font-weight: bold;">Образование:</span><br/><table style="border-collapse: collapse;"><tbody><tr><th style="border: 2px solid black; padding: 4px;">Год поступленя и окончания</th><th style="border: 2px solid black;  padding: 4px;">Учебное заведение</th><th style="border: 2px solid black; padding: 4px;">Факультет, специальность</th></tr>`

            const educations = state.educations

            for (let i = 1; i < educations.length; i++) {
                result += `<tr><td style="border: 2px solid black; padding: 4px; text-align: center;">${educations[i].firstColumn}</td><td style="border: 2px solid black; padding: 4px; text-align: center;">${educations[i].secondColumn}</td><td style="border: 2px solid black; padding: 4px; text-align: center;">${educations[i].thirdColumn}</td></tr>`
            }

            result += "</tbody></table><br/>"

            //Опыт работы

            result += `<br/><span style="font-weight: bold;">Опыт работы:</span><br/><table style="border-collapse: collapse;"><tbody><tr><th style="border: 2px solid black; padding: 4px;">Период работы</th><th style="border: 2px solid black; padding: 4px;">Должность, место работы</th><th style="border: 2px solid black; padding: 4px;">Причина поиска (смены) работы</th></tr>`

            const jobs = state.jobs

            for (let i = 1; i < jobs.length; i++) {
                result += `<tr><td style="border: 2px solid black; padding: 4px; text-align: center;">${jobs[i].firstColumn}</td><td style="border: 2px solid black; padding: 4px; text-align: center;">${jobs[i].secondColumn}</td><td style="border: 2px solid black; padding: 4px; text-align: center;">${jobs[i].thirdColumn}</td></tr>`
            }

            result += `</tbody></table><br/>`

            //Должностные обязанности

            result += `<span style="font-weight: bold;">Выполняемые должностные обязанности:</span><br/>${state.duties}<br/>`

            //Дополнительная информация

            result += `<br/><span style="font-weight: bold;">Дополнительная информация:</span><br/>`

            const additionalInfo = state.additionalInfo

            result += `<table style="border-collapse: collapse;"><tbody><tr><th style="border: 2px solid black; padding: 4px;">Степень владения ПК (программы)</th><th style="text-align: center; border: 2px solid black; padding: 4px;">Степень владения иностранными языками (указать какими)</th><th style="border: 2px solid black; padding: 4px;">Наличие водительских прав и а/м</th><th style="text-align: center; border: 2px solid black; padding: 4px;">Судимость (есть, нет), статья</th></tr>`

            for (let i = 1; i < additionalInfo.length; i++) {
                result += `<tr><td style="border: 2px solid black; text-align: center; padding: 4px;">${additionalInfo[i].firstColumn}</td><td style="border: 2px solid black; text-align: center; padding: 4px;">${additionalInfo[i].secondColumn}</td><td style="border: 2px solid black; text-align: center; padding: 4px;">${additionalInfo[i].thirdColumn}</td><td style="border: 2px solid black; text-align: center; padding: 4px;">${additionalInfo[i].fourthColumn}</td></tr>`
            }
            
            //Близкие родственники

            result += `</tbody></table><br/><span style="font-weight: bold;">Близкие родственники:</span><br/><table style="border-collapse: collapse;"><tbody><tr><th style="border: 2px solid black; text-align: center; padding: 4px;">Степень родства</th><th style="border: 2px solid black; text-align: center; padding: 4px;">Ф.И.О</th><th style="border: 2px solid black; text-align: center; padding: 4px;">Дата рождения</th><th style="border: 2px solid black; text-align: center; padding: 4px;">Место работы, должность</th><th style="border: 2px solid black; text-align: center; padding: 4px;">Место жительства</th></tr>`

            const family = state.family

            for (let i = 1; i < family.length; i++) {
                result += `<tr><td style="border: 2px solid black; text-align: center; padding: 4px;">${family[i].firstColumn}</td><td style="border: 2px solid black; text-align: center; padding: 4px;">${family[i].secondColumn}</td><td style="border: 2px solid black; text-align: center; padding: 4px;">${family[i].thirdColumn}</td><td style="border: 2px solid black; text-align: center; padding: 4px;">${family[i].fourthColumn}</td><td style="border: 2px solid black; text-align: center; padding: 4px;">${family[i].fifthColumn}</td></tr>`
            }

            result += `</tbody></table><br/><table style="border-collapse: collapse;"><tbody>`

            //Какой из перечисленных периодов работы внес наибольший вклад в Ваше развитие? Почему?

            const questionsNames = ['Какой из перечисленных периодов работы внес наибольший вклад в Ваше развитие? Почему?','Что, по Вашему мнению, является наиболее привлекательным в работе?','Что, по Вашему мнению, стимулирует людей работать наиболее эффективно?','Почему нам стоит принять Вас на работу?','Опишите зоны профессиональной деятельности, в которых Вы обладаете наибольшим практическим опытом и специальными знаниями','Какими качествами должен обладать исполнитель для успешного выполнения своих обязанностей?', 'Какими качествами должен обладать руководитель подразделения для успешного управления своим коллективом?', 'Назовите главные недостатки руководителя, которые больше всего могут мешать эффективной работе подразделения, организации?', 'Что Вас привлекает в Исполнительном комитете г.Казани?']
            const questionsValues = [state.firstQuestion, state.secondQuestion, state.thirdQuestion, state.fourthQuestion, state.fifthQuestion, state.sixthQuestion, state.seventhQuestion, state.eighthQuestion, state.ninthQuestion]

            for (let i = 0; i < questionsValues.length; i++) {
                result += `<tr><th style="border: 2px solid black; padding: 4px; text-align: start;">${questionsNames[i]}</th><td style="border: 2px solid black; padding: 4px;">${questionsValues[i]}</td></tr>`
            }

            result += `<tr><th style="border: 2px solid black; padding: 4px; text-align: start;">Предпочитаемые стратегии во время проведения переговоров</th><td style="border: 2px solid black; padding: 4px;">`

            const firstCheckboxArray = state.firstCheckboxArray
            
            for (let i = 0; i < firstCheckboxArray.length; i++) {
                if (i !== firstCheckboxArray.length - 1) {
                    result += `${firstCheckboxArray[i]}; `
                } else {
                    result += `${firstCheckboxArray[i]}`
                }
            }

            result += "</td></tr>"

            //При каких условиях Вы готовы возглавить решение задачи

            result += `<tr><th style="border: 2px solid black; padding: 4px; text-align: start;">При каких условиях Вы готовы возглавить решение задачи</th><td style="border: 2px solid black; padding: 4px;">`

            const secondCheckboxArray = state.secondCheckboxArray

            for (let i = 0; i < secondCheckboxArray.length; i++) {
                if (i !== secondCheckboxArray.length - 1) {
                    result += `${secondCheckboxArray[i]}; `
                } else {
                    result += `${secondCheckboxArray[i]}`
                }
            }

            result += "</td></tr>"

            //В каком случае готов отстаивать свою точку зрения

            result += `<tr><th style="border: 2px solid black; padding: 4px; text-align: start;">В каком случае готов отстаивать свою точку зрения</th><td style="border: 2px solid black; padding: 4px;">`

            const thirdCheckboxArray = state.thirdCheckboxArray

            for (let i = 0; i < thirdCheckboxArray.length; i++) {
                result += `${thirdCheckboxArray[i]}`
            }

            result += "</td></tr>"

            //Ваши профессиональные планы на ближайший год

            result += `<tr><th style="border: 2px solid black; padding: 4px; text-align: start;">Профессиональные планы на ближайший год</th><td style="border: 2px solid black; padding: 4px;">${state.tenthQuestion}</td></tr>`
            
            //Увлечения, хобби

            result += `<tr><th style="border: 2px solid black; padding: 4px; text-align: start;">Увлечения, хобби</th><td style="border: 2px solid black; padding: 4px;">${state.eleventhQuestion}</td></tr></tbody></table>`

            state.result = result            
                 
        },
        setIsFinished: (state, action) => {
            state.isFinished = action.payload
        }
    },
})

export const {setName, setDate, setIsMarried, setChildren, setPlaceOfBirth, setRegistration, setPlaceOfResidence, setTelephone, setActivity, setPost, setMinimum, setSources, setSourceValue, addEducation, deleteEducation, setMilitary, addJob, deleteJob, setDuties, addAdditionalInfo, deleteAdditionalInfo, addFamily, deleteFamily, setFirstQuestion, setSecondQuestion, setThirdQuestion, setFourthQuestion, setFifthQuestion, setSixthQuestion, setSeventhQuestion, setEighthQuestion, setNinthQuestion, addToFirstCheckboxArray, deleteFromFirstCheckboxArray, addToSecondCheckboxArray, deleteFromSecondCheckboxArray, addToThirdCheckboxArray, deleteFromThirdCheckboxArray, setTenthQuestion, setEleventhQuestion, setFormDate, analysis, setIsFinished} = MainInfoReducer.actions

export default MainInfoReducer.reducer