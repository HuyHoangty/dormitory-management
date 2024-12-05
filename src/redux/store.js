import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; // Sử dụng localStorage
import userReducer from './slice/userSlice';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";

// Cấu hình persist
const persistConfig = {
    key: 'root', // Tên khóa lưu trữ
    version: 1,
    storage, // Sử dụng localStorage
};

const rootReducer = combineReducers({
    // product: productReducer,
    user: userReducer,
    // order: orderReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Cấu hình store với persistedReducer
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);
