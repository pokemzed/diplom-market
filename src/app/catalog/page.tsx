import React from 'react';
import CatalogPage from "@/pages/CatalogPage/CatalogPage";
import {Metadata} from "next";
import {APP_TITLE_CATALOG} from "@/constants/general";

export const metadata: Metadata = {
	title: APP_TITLE_CATALOG,
	description:
		'Каталог продукции пекарни Это Хлеб. Найдите на наших полках то, что по вкусу именно вам! ' +
		'Ваши любимые товары всегда на наших прилавках, ждем ваш в нашем каталоге или у прилавков пекарни!',
	icons: {
		icon: '/favicon.ico',
	},
}

const page = () => <CatalogPage />;

export default page;
