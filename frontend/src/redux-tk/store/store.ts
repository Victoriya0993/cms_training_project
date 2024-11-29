import { configureStore } from '@reduxjs/toolkit';
import templateAppSlice from '../slice/sliceTemplateApp/slice';

const store = configureStore({
	reducer: {
		app: templateAppSlice,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;


