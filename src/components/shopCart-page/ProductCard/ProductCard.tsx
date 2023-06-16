import React from 'react';
import styles from "./ProductCard.module.css";
import {IShopCartItem} from "@/types/shopCart";
import {useFetch} from "@/hooks/useFetch";
import {API_PRODUCT_ID} from "@/constants/api";
import {IProductId} from "@/types/products";
import ShopCartBtn from "@/components/general/ProductCard/components/ShopCartBtn/ShopCartBtn";
import SwiperNavigation from "@/ui/SwiperNavigation/SwiperNavigation";
import {useAppDispatch} from "@/store/store";
import {clearItem} from "@/store/slices/shopCartSlice";

interface IProductCard {
	data: IShopCartItem,
	shopCartData: IShopCartItem[],
}

const ProductCard: React.FC<IProductCard> = ({ data, shopCartData }) => {

	const dispatch = useAppDispatch();
	const { data:productData } = useFetch<IProductId>(API_PRODUCT_ID(data.itemId), "GET", {});

	//delete item from shop cart
	const handleClearItem = () => {
		dispatch(clearItem(data))
	}

	if (!productData) return;

	return (
		<div className={styles.ProductCard}>
			<div className={styles.swiperContainer}>
				<SwiperNavigation images={productData.images} />
			</div>

			<div className="content">
				<p>{productData.name} ({data.weight}г)</p>

				<ShopCartBtn
					selected={{weight: data.weight, price: data.price}}
					shopCartData={shopCartData}
					product={productData}
				/>
			</div>

			<footer>
				<b>
					{productData.prices.find(elem => elem.weight === data.weight)?.price}₽
					{!!productData.discount && <span> - {productData.discount}%</span>}
				</b>

				<button onClick={handleClearItem}>
					Удалить
				</button>
			</footer>
		</div>
	);
};

export default ProductCard;
