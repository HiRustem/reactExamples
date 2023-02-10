import { configureStore } from '@reduxjs/toolkit'

import TestReducer from '../features/counter/TestReducer'

export default configureStore({
    reducer: {
        test: TestReducer,
    }
})