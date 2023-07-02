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
	NOT_AVAILABLE = 'NOT_AVAILABLE',
	DEFAULT = 'DEFAULT',
	AVAILABLE = 'AVAILABLE',
}
