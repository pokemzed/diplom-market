import React, {useState} from 'react';
import styles from "./ProductCardFooter.module.css";
import {IProductId, IProductPrice} from "@/types/products";
import WeightsBtns from "@/components/general/ProductCard/components/WeightsBtns/WeightsBtns";
import ShopCartBtn from "@/components/general/ProductCard/components/ShopCartBtn/ShopCartBtn";

interface IProductCardFooter {
	data: IProductId,
}

const ProductCardFooter: React.FC<IProductCardFooter> = ({ data }) => {

	const [selected, setSelected] = useState<IProductPrice>(data.prices[0]);

	return (
		<footer className={styles.ProductCardFooter}>
			<WeightsBtns
				data={data.prices}
				selected={selected}
				setSelected={setSelected}
			/>

			<ShopCartBtn
				selected={selected}
			/>
		</footer>
	);
};

export default ProductCardFooter;
