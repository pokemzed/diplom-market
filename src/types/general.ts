export enum REQUEST_METHODS {
	PUT = "PUT",
	POST = "POST",
	DELETE = "DELETE",
	GET = "GET",
}

export interface IShopAddress {
	address: string,
	city: string,
	workTime: string,
	selected: boolean,
}

export enum ESort {
	SALE = 'SALE',
	DEFAULT = 'DEFAULT',
}
