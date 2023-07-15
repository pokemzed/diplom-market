import {EShopsIds, IShopAddress} from "@/types/general";

export const APP_TITLE = "Это хлеб"

// минимальная цена заказа
export const MIN_ORDER_PRICE = 600;

// адреса магазинов
export const SHOPS_ADDRESSES: IShopAddress[] = [
	{
		id: EShopsIds.ITS_BREAD,
		address: 'пр. Циолковского д.78 (центральный рынок), пекарня «Это Хлеб»',
		city: 'г.Дзержинск',
		workTime: 'Ежедневно с 09:00-21:00',
		selected: false,
	},
	{
		id: EShopsIds.SHADE,
		address: 'Гайдара 51, кафе «Шадэ»',
		city: 'г.Дзержинск',
		workTime: 'Ежедневно с 09:30-23:00',
		selected: false,
	},
	{
		id: EShopsIds.PEKARNYA,
		address: 'Окская набережная 5а, «Пекарня»',
		city: 'г.Дзержинск',
		workTime: 'Ежедневно с 10:00-19:00',
		selected: false,
	},
];

// контакты
export const CONTACTS = {
	phone: {
		title: "+7 (999) 999-99-99",
		value: "+79999999999",
	},
	email: {
		title: "yourmail@yourmail.ru",
		value: "yourmail@yourmail.ru",
	},
};
