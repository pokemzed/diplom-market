import React from 'react';
import styles from "./CategoriesList.module.css";
import {useFetch} from "@/hooks/useFetch";
import {ICategoryId} from "@/types/categories";
import {API_CATEGORY} from "@/constants/api";
import {Badge} from "react-bootstrap";
import CategoryCard from "@/components/admin-page/CategoriesList/components/CategoryCard/CategoryCard";

const CategoriesList = () => {

	const { data } = useFetch<ICategoryId[]>(API_CATEGORY);

	if (!data) return;

	return (
		<div className={styles.CategoriesList}>
			<Badge className={"w-100 mb-2 text-center"}>Список категорий</Badge>

			<div className={styles.content}>
				{
					data?.map(elem => (
						<CategoryCard key={elem._id} data={elem} />
					))
				}
			</div>
		</div>
	);
};

export default CategoriesList;
