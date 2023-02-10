import { configureStore } from '@reduxjs/toolkit'

import PersonReducer from '../features/counter/PersonReducer'
import TestReducer from '../features/counter/TestReducer'

export default configureStore({
    reducer: {
        person: PersonReducer,
        test: TestReducer,
    }
})