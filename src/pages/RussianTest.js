import {useSelector} from 'react-redux'

import {Test, Person, Finish} from '../russian/components'

const RussianTest = () => {
  const randomVariant = Math.floor(Math.random() * 5)

  const isFinished = useSelector((state) => state.test.isFinished)

  return (
    <div>
      <div className={`${isFinished === true ? 'hidden' : ''}`}>
        <Person />
        <Test random={randomVariant} />
      </div>

      <div className={`${isFinished === false ? 'hidden' : ''}`}>
        <Finish />
      </div>
    </div>
  );
}

export default RussianTest;