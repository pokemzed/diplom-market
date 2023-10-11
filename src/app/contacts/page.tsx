import React from 'react';
import ContactsPage from "@/pages/ContactsPage/ContactsPage";
import {Metadata} from "next";
import {APP_TITLE_CONTACTS} from "@/constants/general";

export const metadata: Metadata = {
	title: APP_TITLE_CONTACTS,
	description:
		'Мы всегда остаемся на связи с нашими клиентами! ' +
		'Это Хлеб - это что-то очень настоящее. Это Хлеб.',
	icons: {
		icon: '/favicon.ico',
	},
}


const page = () => <ContactsPage />;

export default page;
