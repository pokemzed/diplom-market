import React, {FormEvent, useState} from 'react';
import styles from "./ProductAdd.module.css";
import {Badge, Button, Form, FormControl, Spinner} from "react-bootstrap";
import {ITEM_INITIAL} from "@/constants/products";
import {IProduct} from "@/types/products";
import ProductFormWeightPrice from "@/components/admin-page/ProductAdd/components/ProductFormWeightPrice/ProductFormWeightPrice";
import ProductFormImages from "@/components/admin-page/ProductAdd/components/ProductFormImages/ProductFormImages";
import {API_PRODUCT} from "@/constants/api";
import {handlePost} from "@/functions/handlePost";
import {TOAST_ERROR, TOAST_SUCCESS} from "@/constants/toasts";
import ProductFormCategorySelect from "@/components/admin-page/ProductAdd/components/ProductFormCategorySelect/ProductFormCategorySelect";

const ProductAdd = () => {

	const [formData, setFormData] = useState<IProduct>(ITEM_INITIAL);
	const [load, setLoad] = useState<boolean>(false);

	const handleSend = (e:FormEvent) => {
		e.preventDefault();

		if (!formData.images.length) {
			TOAST_ERROR("Загрузите изображения товара!");
			return;
		}

		if (!formData.weights.length) {
			TOAST_ERROR("Выберите вес товара!");
			return;
		}

		if (!formData.categoryId) {
			TOAST_ERROR("Выберите категорию товара!");
			return;
		}

		setLoad(true);
		handlePost("POST", API_PRODUCT, formData)
			.then(() => TOAST_SUCCESS('Товар успешно добавлен'))
			.catch(() => TOAST_ERROR('Ошибка добавления товара'))
			.finally(() => {
				setFormData(ITEM_INITIAL)
				setLoad(false)
			})
	}

	return (
		<div className={styles.ProductAdd}>
			<Badge className={"w-100 mb-2 text-center"}>Добавить товар</Badge>

			<Form onSubmit={handleSend}>
				<ProductFormCategorySelect formData={formData} setFormData={setFormData} />

				<FormControl
					required
					placeholder="Название"
					value={formData.name}
					onChange={e => setFormData({...formData, name: e.target.value})}
				/>

				<FormControl
					required
					as={"textarea"} rows={3}
					placeholder="Описание"
					value={formData.description}
					onChange={e => setFormData({...formData, description: e.target.value})}
				/>

				<FormControl
					required
					as={"textarea"} rows={3}
					placeholder="Состав"
					value={formData.composition}
					onChange={e => setFormData({...formData, composition: e.target.value})}
				/>

				<ProductFormImages formData={formData} setFormData={setFormData} />

				<FormControl
					placeholder="Скидка (%)"
					type={"number"}
					value={formData.discount || ''}
					onChange={e => setFormData({...formData, discount: +e.target.value})}
				/>

				<ProductFormWeightPrice formData={formData} setFormData={setFormData} />

				<FormControl
					required
					placeholder="Время приготовления (мин)"
					type={"number"}
					value={formData.cookingTime || ''}
					onChange={e => setFormData({...formData, cookingTime: +e.target.value})}
				/>

				<FormControl
					required
					placeholder="Наличие (штук)"
					type={"number"}
					value={formData.available || ''}
					onChange={e => setFormData({...formData, available: +e.target.value})}
				/>

				<Button disabled={load} size={"sm"} variant={"outline-primary"} className={"w-100"} type={"submit"}>
					{load ? <Spinner size={"sm"} /> : 'Отправить'}
				</Button>
			</Form>
		</div>
	);
};

export default ProductAdd;
