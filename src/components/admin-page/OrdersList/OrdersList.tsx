import React, {useState} from 'react';
import styles from "./OrdersList.module.css";
import {useGetOrders} from "@/hooks/useGetOrders";
import {Badge, Button, ButtonGroup} from "react-bootstrap";
import OrderCard from "@/components/admin-page/OrdersList/components/OrderCard/OrderCard";
import {EOrderSorts} from "@/types/order";

const OrdersList = () => {

	//list orders
	const { data } = useGetOrders();

	const [sort, setSort] = useState(EOrderSorts.WAIT);

	// return sorted products
	const getSortedItems = () => {
		if (!data?.orders?.length) return null;
		if (sort === EOrderSorts.ALL) return data.orders;
		if (sort === EOrderSorts.WAIT) return data.orders.filter(elem => !elem.completed);
		if (sort === EOrderSorts.COMPLETED) return data.orders.filter(elem => elem.completed);
	}

	if (!data.orders.length) return;

	return (
		<div className={styles.OrdersList}>
			<Badge className={"w-100 mb-2 text-center"}>
				Список заказов ({data.loading ? "Обновление..." : data.orders.length})
			</Badge>

			{/*SORT BUTTONS*/}
			<ButtonGroup className={styles.sortsContainer}>
				<Button disabled={sort === EOrderSorts.WAIT} onClick={() => setSort(EOrderSorts.WAIT)}>
					Незавершенные заказы
				</Button>
				<Button disabled={sort === EOrderSorts.COMPLETED} onClick={() => setSort(EOrderSorts.COMPLETED)}>
					Заверешенные заказы
				</Button>
				<Button disabled={sort === EOrderSorts.ALL} onClick={() => setSort(EOrderSorts.ALL)}>
					Все заказы
				</Button>
			</ButtonGroup>

			{/*LIST ORDERS*/}
			<div
				hidden={!getSortedItems() || !getSortedItems()?.length}
				className={styles.content}
			>
				{
					getSortedItems() && getSortedItems()?.map(elem => (
						<OrderCard key={elem._id} data={elem} />
					))
				}
			</div>

			{// смотрим не пустой ли массив в категории
				(!getSortedItems() || !getSortedItems()?.length) &&
				<h6 className={styles.noOrders}>
					Список заказов в данной категории пуст!
				</h6>
			}
		</div>
	);
};

export default OrdersList;
