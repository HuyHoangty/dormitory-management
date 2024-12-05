import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; // Sử dụng localStorage
import userReducer from './slice/userSlice';import {
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
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    // product: productReducer,
    user: userReducer, // Đảm bảo reducer đúng
    // order: orderReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Cấu hình store với persistedReducer
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);