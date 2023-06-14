import React from 'react';
import {useGetCategories} from "@/hooks/useGetCategories";

const CategorySelect = () => {

	const { data:{categories, selected}, selectCategory } = useGetCategories();

	if (!categories.length) return;

	return (
		<div className={"CategorySelect"}>
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
