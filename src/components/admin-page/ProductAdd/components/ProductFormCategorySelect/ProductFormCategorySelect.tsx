import React from 'react';
import {useFetch} from "@/hooks/useFetch";
import {API_CATEGORY} from "@/constants/api";
import {Button, FormSelect, Spinner} from "react-bootstrap";
import {ICategoryId} from "@/types/categories";
import {IProduct} from "@/types/products";

interface ProductFormCategorySelect {
	formData: IProduct,
	setFormData: (formData: IProduct) => void,
}

const ProductFormCategorySelect: React.FC<ProductFormCategorySelect> = ({ formData, setFormData }) => {

	const { data, error, load } = useFetch<ICategoryId[]>(API_CATEGORY);

	if (error) {
		return (
			<Button disabled className={"w-100"} variant={"danger"}>
				Ошибка загрузки категорий!
			</Button>
		)
	}

	if (load) {
		return (
			<Button disabled className={"w-100"}>
				Загрузка категорий
				<Spinner size={"sm"} className={"mx-2"} />
			</Button>
		)
	}

	return (
		<FormSelect onChange={e => setFormData({...formData, categoryId: e.target.value})}>
			<option>Категория товара</option>
			{
				data?.map(elem => (
					<option key={elem._id} value={elem._id}>
						{elem.name}
					</option>
				))
			}
		</FormSelect>
	);
};

export default ProductFormCategorySelect;
