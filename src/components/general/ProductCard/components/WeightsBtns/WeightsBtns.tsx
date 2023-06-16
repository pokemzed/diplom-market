import React from 'react';
import styles from "./WeightsBtns.module.css";
import {IProductPrice} from "@/types/products";

interface IWeightsBtns {
	data: IProductPrice[],
	selected: IProductPrice,
	setSelected: (elem:IProductPrice) => void,
}

const WeightsBtns: React.FC<IWeightsBtns> = ({ data, selected, setSelected }) => {
	return (
		<div className={styles.WeightsBtns}>
			{data.length === 1 && <h3>{data[0].price}₽</h3>}
			{
				data.length > 1 && data.map(elem => (
					<button
						key={elem.weight}
						disabled={elem === selected}
						onClick={() => setSelected(elem)}
					>
						<h4>{elem.price}₽</h4>
						<p className="small">{elem.weight}г</p>
					</button>
				))
			}
		</div>
	);
};

export default WeightsBtns;
