import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { skillsReducer } from '../features/skills/skillsSlice';
import { aboutMeReducer } from '../features/aboutMe/aboutMeSlice';

export const store = configureStore({
    reducer: {
        skills: skillsReducer,
        aboutMe: aboutMeReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});