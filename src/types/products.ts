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
