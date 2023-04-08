import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { portfoliosReducer } from '../features/portfolios/portfoliosSlice';
import { commentsReducer } from '../features/comments/commentsSlice';
import { partnersReducer } from '../features/partners/partnersSlice';
import { promotionsReducer} from '../features/promotions/promotionsSlice';

export const store = configureStore({
    reducer: {
        portfolios: portfoliosReducer,
        comments: commentsReducer,
        partners: partnersReducer,
        promotions: promotionsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});