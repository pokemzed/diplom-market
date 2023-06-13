import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import {ICategoryId} from "@/types/categories";
import {API_CATEGORY} from "@/constants/api";
import {handleRequest} from "@/functions/handleRequest";

interface ICategories {
	categories: ICategoryId[],
	loading: Boolean,
	error: null | string,
}

const initialState:ICategories = {
	categories: [],
	loading: false,
	error: null,
}

export const getCategories = createAsyncThunk<any, undefined, {rejectValue: string}>(
	'categories/getCategories',
	async (_,{rejectWithValue}) => {
		const res = await handleRequest("GET", API_CATEGORY, {});
		if (res.status !== 200){
			return rejectWithValue("Возникла ошибка при получении категорий!")
		}
		return res.data
	}
)

export const categoriesSlice = createSlice({
	name: "categories",
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(getCategories.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getCategories.fulfilled, (state, action) => {
				state.categories = action.payload;
				state.loading = false;
			})
			.addCase(getCategories.rejected, (state) => {
				state.loading = false;
				state.error = "Get stories failed!"
			})
	}
})

export default categoriesSlice.reducer;
