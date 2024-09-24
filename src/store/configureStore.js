import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer.js';

const store = configureStore({
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware(), // Gerekirse middleware ekleyin
    // devTools: process.env.NODE_ENV !== 'production', // Geliştirici araçlarını etkinleştirin
});

export default store;
