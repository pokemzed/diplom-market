import React, {useState} from 'react';
import "./ProductCardFooter.css";
import {IProductId, IProductPrice} from "@/types/products";

interface IProductCardFooter {
	data: IProductId,
}

const ProductCardFooter: React.FC<IProductCardFooter> = ({ data }) => {

	const [selected, setSelected] = useState<IProductPrice>(data.prices[0]);

	return (
		<footer className={"ProductCardFooter"}>
			<div className="weights">
				{data.prices.length === 1 && <h3>{data.prices[0].price}₽</h3>}
				{
					data.prices.length > 1 && data.prices.map(elem => (
						<button key={elem.weight} disabled={elem === selected} onClick={() => setSelected(elem)}>
							<h4>{elem.price}</h4>
							<p className="small">{elem.weight}г</p>
						</button>
					))
				}
			</div>

			<div className={"add-container"}>
				{
					data.prices.map(elem => (
						<button
							key={elem.weight}
							hidden={elem !== selected}
							onClick={() => console.log(data.name + " " + elem.weight)}
						>
							+
						</button>
					))
				}
			</div>
		</footer>
	);
};

export default ProductCardFooter;
