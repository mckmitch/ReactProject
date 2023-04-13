import { createSlice } from '@reduxjs/toolkit';
import { ABOUTME } from '../../app/shared/ABOUTME';

const initialState = {
    aboutMeArray: ABOUTME
};

const aboutMeSlice = createSlice({
    name: 'aboutMe',
    initialState
});

export const aboutMeReducer = aboutMeSlice.reducer;

export const selectAllAboutMe = (state) => {
    return state.aboutMe.aboutMeArray;
};
