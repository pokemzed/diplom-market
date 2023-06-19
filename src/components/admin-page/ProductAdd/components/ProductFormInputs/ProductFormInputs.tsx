import React from 'react';
import {FloatingLabel, Form, FormControl} from "react-bootstrap";
import {IProduct, IProductId} from "@/types/products";

interface IProductFormInputs {
	formData: IProduct | IProductId,
	setFormData: (formData: IProduct | IProductId) => void,
}

const ProductFormInputs: React.FC<IProductFormInputs> = ({ formData, setFormData }) => {
	return (
		<>
			<FloatingLabel label="Название">
				<FormControl
					required
					value={formData?.name}
					onChange={e => setFormData({...formData, name: e.target.value})}
				/>
			</FloatingLabel>

			<FloatingLabel label="Описание">
				<FormControl
					required as={"textarea"} style={{ minHeight: 80 }}
					value={formData?.description}
					onChange={e => setFormData({...formData, description: e.target.value})}
				/>
			</FloatingLabel>

			<FloatingLabel label="Состав">
				<FormControl
					required as={"textarea"} rows={4}
					value={formData?.composition}
					onChange={e => setFormData({...formData, composition: e.target.value})}
				/>
			</FloatingLabel>

			<FloatingLabel label="Скидка (%)">
				<FormControl
					min={0}
					max={100}
					type={"number"}
					value={formData?.discount || ''}
					onChange={e => setFormData({...formData, discount: +e.target.value})}
				/>
			</FloatingLabel>

			<FloatingLabel label="Время приготовления (мин)">
				<FormControl
					required type={"number"}
					value={formData?.cookingTime || ''}
					onChange={e => setFormData({...formData, cookingTime: +e.target.value})}
				/>
			</FloatingLabel>

			<Form.Switch
				label="Товар в наличии"
				checked={formData?.available}
				onChange={() => setFormData({...formData, available: !formData?.available})}
			/>
		</>
	);
};

export default ProductFormInputs;
