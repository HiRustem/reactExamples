import {configureStore} from '@reduxjs/toolkit'

import PersonReducer from '../features/counter/PersonReducer'
import FormReducer from '../features/counter/FormReducer'

export default configureStore({
    reducer: {
        person: PersonReducer,
        form: FormReducer,
    }
})