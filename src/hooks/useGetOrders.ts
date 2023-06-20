import {useAppDispatch, useAppSelector} from "@/store/store";
import {useEffect} from "react";
import {getOrders} from "@/store/slices/ordersSlice";

export const useGetOrders = () => {
	const data = useAppSelector(state => state.orders);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (!data.orders.length) {
			dispatch(getOrders())
		}
	},[])

	return {
		data,
		updateOrders: () => dispatch(getOrders())
	};
}
