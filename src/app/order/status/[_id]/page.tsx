'use client'
import React, {useEffect, useState} from 'react';
import {redirect, useParams} from "next/navigation";
import {useFetch} from "@/hooks/useFetch";
import {API_ORDER_ID} from "@/constants/api";
import {REQUEST_METHODS} from "@/types/general";
import {LINK_ERROR} from "@/constants/links";
import {EPayment, IOrderFormId} from "@/types/order";
import {Spinner} from "react-bootstrap";
import OrderStatusData from "@/components/order-status-page/OrderStatusData/OrderStatusData";

const page = () => {

	const params = useParams();
	const [interval, setInterval] = useState<false | number>(false);
	const { data, error, load } = useFetch<IOrderFormId>(API_ORDER_ID(params._id), REQUEST_METHODS.GET, {}, interval);

	useEffect(() => {
		//если онлайн оплата не завершена то обновляем статус каждые 3 секунды
		if (data?.paymentType === EPayment.ONLINE && !data?.paid) {
			setInterval(3000);
		} else {
			setInterval(false);
		}
	}, [data?.paymentType, data?.paid])

	if (load && !interval) return <Spinner />;
	if (error) redirect(LINK_ERROR);

	if (data)
	return (
		<div>
			<h1>Статус заказа</h1>
			<OrderStatusData data={data} />
		</div>
	);
};

export default page;
