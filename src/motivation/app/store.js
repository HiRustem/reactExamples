import { configureStore } from '@reduxjs/toolkit'

import ResultReducer from '../features/counter/ResultReducer'
import PersonReducer from '../features/counter/PersonReducer'

export default configureStore({
    reducer: {
        result: ResultReducer,
        person: PersonReducer,
    }
})