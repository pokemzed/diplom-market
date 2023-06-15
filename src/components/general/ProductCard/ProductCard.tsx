import React from 'react';
import {IProductId} from "@/types/products";
import SwiperNavigation from "@/ui/SwiperNavigation/SwiperNavigation";
import "./ProductCard.css";
import {Badge} from "react-bootstrap";
import ProductCardFooter from "@/components/general/ProductCard/components/ProductCardFooter/ProductCardFooter";

interface IProductCard {
	data: IProductId,
}

const ProductCard: React.FC<IProductCard> = ({ data }) => {
	return (
		<div className={"ProductCard"}>
			<Badge className={"weights"}>
				{data.weights.map(elem => (<p className={"small"} key={elem.value}>{elem.value}г<span>/</span></p>))}
			</Badge>

			<SwiperNavigation images={data.images} />

			<h5>{data.name}</h5>
			<p className="small">{data.composition}</p>

			<ProductCardFooter data={data} />
		</div>
	);
};

export default ProductCard;
