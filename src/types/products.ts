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
	cookingTime: number,
}

export interface IProductId extends IProduct {
	_id: string,
	_v: number,
}
