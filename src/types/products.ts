export interface ISelectManyItem {
	title: string,
	value: number | string
}

export interface IProductPrice {
	weight: number,
	price: number,
}

export interface IProduct {
	name: string,
	description: string,
	categoryId: string,
	images: string[],
	discount: number,
	prices: IProductPrice[],
	weights: ISelectManyItem[],
	composition: string,
	available: number,
	cookingTime: number,
}

export interface IProductId extends IProduct {
	_id: string,
	_v: number,
}

export interface IProductShopCart extends IProductId {
	weight: number,
	price: number,
}
