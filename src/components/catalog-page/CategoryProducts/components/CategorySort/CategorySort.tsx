import React from 'react';
import styles from "./CategorySort.module.css";
import {Form} from "react-bootstrap";
import {ESort} from "@/types/general";
import {IProductId} from "@/types/products";

interface ICategorySort {
	data: IProductId[],
	sort: ESort,
	setSort: (value: ESort) => void,
}

const CategorySort: React.FC<ICategorySort> = ({ data, sort, setSort }) => {
	return (
		<div hidden={!data.length} className={styles.CategorySort}>
			<Form.Check // sale switch
				className={styles.check}
				checked={sort === ESort.SALE}
				onChange={() => setSort(sort === ESort.SALE ? ESort.DEFAULT : ESort.SALE)}
				label={"Только товары со скидкой"}
			/>
			<Form.Check // available switch
				className={styles.check}
				checked={sort === ESort.AVAILABLE}
				onChange={() => setSort(sort === ESort.AVAILABLE ? ESort.DEFAULT : ESort.AVAILABLE)}
				label={"Только товары в наличии"}
			/>
		</div>
	);
};

export default CategorySort;
