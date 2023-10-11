import React from 'react';
import ProductPage from "@/pages/ProductPage/ProductPage";
import {Metadata} from "next";
import {APP_TITLE_PRODUCT} from "@/constants/general";

export const metadata: Metadata = {
	title: APP_TITLE_PRODUCT,
	description:
		'Каталог в Это Хлеб - то самое место, где вы точно найдете, то, что вам по вкусу. ' +
		'Онлайн оплата, доставка и горячий хлеб не оставят вас равнодушными.',
	icons: {
		icon: '/favicon.ico',
	},
}

const page = () => <ProductPage />

export default page;
