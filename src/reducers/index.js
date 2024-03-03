import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "../slices/authSlice";
import cartSlice from "../slices/cartSlice";
import profileSlice from "../slices/profileSlice";
import loadingBarSlice from "../slices/loadingBarSlice";
import courseSlice from "../slices/courseSlice";
import viewCourseSlice from "../slices/viewCourseSlice";

const rootReducers = combineReducers({
    auth : authSlice,
    cart : cartSlice,
    profile: profileSlice,
    loadingBar : loadingBarSlice,
    course : courseSlice,
    viewCourse : viewCourseSlice
})
export default rootReducers;