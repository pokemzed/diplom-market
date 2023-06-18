import React, {useEffect, useState} from 'react';
import styles from "./CategoryProductsList.module.css";
import {useFetch} from "@/hooks/useFetch";
import {API_CATEGORY_ITEMS} from "@/constants/api";
import {IProductId} from "@/types/products";
import ProductCard from "@/components/general/ProductCard/ProductCard";
import {Form, Spinner} from "react-bootstrap";
import {ESort, REQUEST_METHODS} from "@/types/general"

const CategoryProductsList = ({selected} : {selected:string}) => {

	//sort type
	const [sort, setSort] = useState<ESort>(ESort.DEFAULT);

	//@ts-ignore
	const { data, load } = useFetch<IProductId[]>(API_CATEGORY_ITEMS(selected),REQUEST_METHODS.GET, {});

	// @ts-ignore sort sale item
	const getSaleItems = () => data.filter(elem => elem.discount)

	const getSortedData = () => {
		if (sort === ESort.DEFAULT) return data;
		if (sort === ESort.SALE) return getSaleItems();
	}

	useEffect(() => {
		setSort(ESort.DEFAULT) //clear sort if we change category
	},[selected])

	if (load) return <Spinner />;
	if (!data) return;

	return (
		<div className={styles.CategoryProductsList}>

			<div hidden={!data.length} className={styles.sort}>
				<Form.Switch // sale switch
					checked={sort === ESort.SALE}
					onChange={() => setSort(sort === ESort.SALE ? ESort.DEFAULT : ESort.SALE)}
					label={"Показывать только товары со скидкой"}
				/>
			</div>

			{// products map
				!!(getSortedData() && getSortedData()?.length) &&
				<div className={styles.container}>
					{getSortedData()?.map(elem => <ProductCard key={elem._id} data={elem} />)}
				</div>
			}

			{// check products length
				!getSortedData()?.length &&
				<p>Список товаров для данной категории пуст</p>
			}
		</div>
	);
};

export default CategoryProductsList;
