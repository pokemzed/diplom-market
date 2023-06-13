import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector, TypedUseSelectorHook} from "react-redux";
import categoriesSlice from "@/store/slices/categoriesSlice";
import productsSlice from "@/store/slices/productsSlice";

const store = configureStore({
	reducer : {
		categories: categoriesSlice,
		products: productsSlice,
	},
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
