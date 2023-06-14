import {useAppDispatch, useAppSelector} from "@/store/store";
import {useEffect} from "react";
import {getCategories, selectCategory} from "@/store/slices/categoriesSlice";

export const useGetCategories = () => {
	const categories = useAppSelector(state => state.categories);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (!categories.categories.length) {
			dispatch(getCategories())
		}
	},[])

	return {
		data: categories,
		updateCategories: () => dispatch(getCategories()),
		selectCategory: (id:string) => dispatch(selectCategory(id)),
	};
}
