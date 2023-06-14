import React from 'react';
import {IProductId} from "@/types/products";
import SwiperNavigation from "@/ui/SwiperNavigation/SwiperNavigation";
import "./ProductCard.css";
import {Badge} from "react-bootstrap";

interface IProductCard {
	data: IProductId,
}

const ProductCard: React.FC<IProductCard> = ({ data }) => {
	return (
		<div className={"ProductCard"}>
			<Badge className={"weights"}>
				{data.weights.map(elem => (<p className={"small"}>{elem.value}г<span>/</span></p>))}
			</Badge>

			<SwiperNavigation images={data.images} />

			<h5>{data.name}</h5>
			<p className="small">{data.composition}</p>

			<footer>

			</footer>
		</div>
	);
};

export default ProductCard;
