import React, {useState} from 'react';
import styles from "./ProductAdd.module.css";
import {Badge, Button, Form, FormControl} from "react-bootstrap";
import SelectMany from "@/ui/SelectMany/SelectMany";
import {ITEM_INITIAL, ITEM_WEIGHTS} from "@/constants/products";
import {IProduct, ISelectManyItem} from "@/types/products";

const ProductAdd = () => {

	const [formData, setFormData] = useState<IProduct>(ITEM_INITIAL);

	const handleSelectWeight = (item:ISelectManyItem) => {
		if (formData.weights.find(elem => elem.value === item.value)){
			setFormData({...formData, weights: formData.weights.filter(elem => elem.value !== item.value)})
		}else {
			setFormData({...formData, weights: [...formData.weights, item]})
		}
	}

	return (
		<div className={styles.ProductAdd}>
			<Badge className={"w-100 text-center"}>Добавить товар</Badge>

			<Form>
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

				<FormControl
					type={"file"}
					multiple={true}
				/>

				<FormControl
					required
					placeholder="Цена (Рубли)"
					type={"number"}
					value={formData.price || ''}
					onChange={e => setFormData({...formData, price: +e.target.value})}
				/>

				<FormControl
					placeholder="Скидка (%)"
					type={"number"}
					value={formData.discount || ''}
					onChange={e => setFormData({...formData, discount: +e.target.value})}
				/>

				<SelectMany
					title={"Варианты веса"}
					data={ITEM_WEIGHTS}
					selectedItems={formData.weights}
					handleSelect={handleSelectWeight}
				/>

				<FormControl
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

				<Button size={"sm"} variant={"outline-primary"} className={"w-100"} type={"submit"}>
					Отправить
				</Button>
			</Form>
		</div>
	);
};

export default ProductAdd;
