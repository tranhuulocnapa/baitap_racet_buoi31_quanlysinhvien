import { configureStore } from "@reduxjs/toolkit"
import formstudent from "./../student/slice"

const store = configureStore({
    reducer: {
        formstudent
    },

}
)
export default store;   