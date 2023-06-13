import React from 'react';
import {Button, FormSelect, Spinner} from "react-bootstrap";
import {IProduct, IProductId} from "@/types/products";
import {useGetCategories} from "@/hooks/useGetCategories";

interface ProductFormCategorySelect {
	formData: IProduct | IProductId,
	setFormData: (formData: IProduct | IProductId) => void,
}

const ProductFormCategorySelect: React.FC<ProductFormCategorySelect> = ({ formData, setFormData }) => {

	const { data } = useGetCategories();

	if (data.error) {
		return (
			<Button disabled className={"w-100"} variant={"danger"}>
				Ошибка загрузки категорий!
			</Button>
		)
	}

	if (data.loading) {
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
				data.categories?.map(elem => (
					<option key={elem._id} value={elem._id}>
						{elem.name}
					</option>
				))
			}
		</FormSelect>
	);
};

export default ProductFormCategorySelect;
