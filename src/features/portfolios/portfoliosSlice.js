import { createSlice } from '@reduxjs/toolkit';
import { PORTFOLIOS } from '../../app/shared/SKILLS';

const initialState = {
    portfoliosArray: PORTFOLIOS
};

const portfoliosSlice = createSlice({
    name: 'portfolios',
    initialState
});

export const portfoliosReducer = portfoliosSlice.reducer;

export const selectAllPortfolios = (state) => {
    return state.portfolios.portfoliosArray;
};

export const selectPortfolioById = (id) => (state) => {
    return state.portfolios.portfoliosArray.find(
        (portfolio) => portfolio.id === parseInt(id)
    );
};

export const selectFeaturedPortfolio = (state) => {
    return state.portfolios.portfoliosArray.find((portfolio) => portfolio.featured);
};