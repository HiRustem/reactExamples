
import {useSelector} from 'react-redux'

import {MainIfo, SelectSource, TableEducation, SelectMilitary, TableJob, TextareaDuties, TableAdditionalInfo, TableFamily, TextareaFirstQuestion, TextareaSecondQuestion, TextareaThirdQuestion, TextareaFourthQuestion, TextareaFifthQuestion, TextareaSixthQuestion, TextareaSeventhQuestion, TextareaEighthQuestion, TextareaNinthQuestion, CheckboxFirstQuestion, CheckboxSecondQuestion, CheckboxThirdQuestion, TextAreaTenthQuestion, TextareaEleventhQuestion, Information, Confirm, Finish} from '../form/components'

const Form = () => {
  const isFinished = useSelector((state) => state.mainInfo.isFinished)

  return (
    <div>
      <div className={`${isFinished === false ? '' : 'hidden'}`}>
        <MainIfo />
        <SelectSource />
        <TableEducation />
        <SelectMilitary />
        <TableJob />
        <TextareaDuties />
        <TableAdditionalInfo />
        <TableFamily />
        <TextareaFirstQuestion />
        <TextareaSecondQuestion />
        <TextareaThirdQuestion />
        <TextareaFourthQuestion />
        <TextareaFifthQuestion />
        <TextareaSixthQuestion />
        <TextareaSeventhQuestion />
        <TextareaEighthQuestion />
        <TextareaNinthQuestion />
        <CheckboxFirstQuestion />
        <CheckboxSecondQuestion />
        <CheckboxThirdQuestion />
        <TextAreaTenthQuestion />
        <TextareaEleventhQuestion />
        <Information />
        <Confirm />
      </div>

      <div className={`${isFinished === true ? '' : 'hidden'}`}>
        <Finish />
      </div>
    </div>
  )
}

export default Form