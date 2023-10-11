import React from 'react';
import DeliveryPage from "@/pages/DeliveryPage/DeliveryPage";
import {Metadata} from "next";
import {APP_TITLE_DELIVERY} from "@/constants/general";

export const metadata: Metadata = {
	title: APP_TITLE_DELIVERY,
	description:
		'Доставим вашу любимую продукцию прямо к вам домой. Доставка от 30 минут только в Это Хлеб. ' +
		'Бесплатная доставка - при сумме заказа от 600₽',
	icons: {
		icon: '/favicon.ico',
	},
}

const page = () => <DeliveryPage />;

export default page;
