import {IShopAddress} from "@/types/general";

// минимальная цена заказа
export const MIN_ORDER_PRICE = 600;

// стоимость доставки
export const DELIVERY_PRICE = 300;

// адреса магазинов
export const SHOPS_ADDRESSES: IShopAddress[] = [
	{
		address: 'ул.Петрищева, д.12',
		city: 'г.Дзержинск',
		workTime: 'Ежедневно с 09:00-21:00',
		selected: false,
	},
	// {
	// 	address: 'ул.Нижегородская, д.53',
	// 	city: 'г.Дзержинск',
	// 	workTime: 'Ежедневно с 09:00-22:00',
	// 	selected: false,
	// },
	// {
	// 	address: 'ул.Героев, д.21',
	// 	city: 'г.Дзержинск',
	// 	workTime: 'Ежедневно с 10:00-20:00',
	// 	selected: false,
	// },
];
