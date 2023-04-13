import { createSlice } from '@reduxjs/toolkit';
import { SKILLS } from '../../app/shared/SKILLS';

const initialState = {
    skillsArray: SKILLS
};

const skillsSlice = createSlice({
    name: 'skills',
    initialState
});

export const skillsReducer = skillsSlice.reducer;

export const selectAllSkills = (state) => {
    return state.skills.skillsArray;
};

export const selectSkillById = (id) => (state) => {
    return state.skills.skillsArray.find(
        (skill) => skill.id === parseInt(id)
    );
};
