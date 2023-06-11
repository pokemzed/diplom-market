
export interface ISelectManyItem {
	title:string,
	value: number | string
}

export interface IProduct {
	name: string,
	description: string,
	images: string[],
	discount: number,
	price: number,
	weights: ISelectManyItem[],
	composition: string,
	available: number,
	cookingTime: number,
}
