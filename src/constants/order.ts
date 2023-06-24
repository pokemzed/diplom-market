import {IShopCartItem} from "@/types/shopCart";
import {EDelivery, EPayment, IOrderForm} from "@/types/order";

export const ORDER_FORM_INITIAL = (positions:IShopCartItem[]): IOrderForm => {
	return {
		phoneNumber: '',
		fullName: '',
		shopAddress: '',
		address: {
			address: '',
			addressName: '',
			flat: '',
			entrance: '',
			intercom: '',
			floor: 0,
			commentAddress: '',
		},
		positions: positions,
		comment: '',
		deliveryType: EDelivery.COURIER,
		paymentType: EPayment.ONLINE,
	}
}
