import React from 'react';
import {useGetCategories} from "@/hooks/useGetCategories";
import styles from "./CategorySelect.module.css";

const CategorySelect = () => {

	const { data:{categories, selected}, selectCategory } = useGetCategories();

	if (!categories.length || !selected) return;

	return (
		<div className={styles.CategorySelect}>
			{
				categories?.map(elem => (
					<button
						key={elem._id}
						onClick={() => selectCategory(elem._id)}
						disabled={selected === elem._id}
					>
						{elem.name}
					</button>
				))
			}
		</div>
	);
};

export default CategorySelect;
