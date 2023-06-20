import React from 'react';
import styles from "./OrdersList.module.css";
import {useGetOrders} from "@/hooks/useGetOrders";
import {Badge} from "react-bootstrap";

const OrdersList = () => {

	const { data } = useGetOrders();
	console.log(data)

	//TODO: выгрузка заказов

	if (!data.orders.length) return;

	return (
		<div className={styles.OrdersList}>
			<Badge className={"w-100 mb-2 text-center"}>
				Список заказов ({data.loading ? "Обновление..." : data.orders.length})
			</Badge>

			<div className={styles.content}>

			</div>
		</div>
	);
};

export default OrdersList;
