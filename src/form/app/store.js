import {configureStore} from '@reduxjs/toolkit'

import MainInfoReducer from '../features/counter/MainInfoReducer'

export default configureStore({
    reducer: {
        mainInfo: MainInfoReducer,
    }
})