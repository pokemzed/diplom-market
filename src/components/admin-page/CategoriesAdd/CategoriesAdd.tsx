'use client'
import React, {FormEvent, useState} from 'react';
import {Alert, Badge, Button, Form, FormControl} from "react-bootstrap";
import styles from "./CategoriesAdd.module.css";
import {convertToBase64} from "@/functions/convertToBase64";
import axios from "axios";
import {CATEGORY_INITIAL} from "@/constants/categories";
import {ICategory} from "@/types/categories";

const CategoriesAdd = () => {

	const [imageError, setImageError] = useState<false | string>(false);
	const [formData, setFormData] = useState<ICategory>(CATEGORY_INITIAL);

	const handleFileUpload = async (file:Blob | undefined) => {
		setImageError(false)
		if (!file) return;
		convertToBase64(file)
			// @ts-ignore
			.then(res => setFormData({...formData, image: res}))
			.catch(() => setImageError("Ошибка конвертации, выберите другое изображение."))
	};

	const handleSend = (e:FormEvent) => {
		e.preventDefault();

		if (!formData.image || imageError) {
			setImageError("Загрузите изображение!");
			return;
		}

		const options = {
			method: 'POST',
			url: 'http://23.111.124.118:3005/category',
			headers: {'Content-Type': 'application/json'},
			data: formData
		};

		axios.request(options)
			.then(res => console.log(res))
			.catch(err => console.log(err))
	}

	return (
		<div className={styles.CategoriesAdd}>
			<Badge className={"mb-2 w-100 text-center"}>Добавить категорию</Badge>

			<Form onSubmit={handleSend}>
				<FormControl
					required
					placeholder={"Название"}
					value={formData.name}
					onChange={e => setFormData({...formData, name: e.target.value})}
				/>

				<FormControl
					as={"textarea"} rows={3}
					placeholder={"Описание"}
					value={formData.description}
					onChange={e => setFormData({...formData, description: e.target.value})}
				/>

				<FormControl
					type={"file"}
					multiple={false}
					//@ts-ignore
					onChange={e => handleFileUpload(e.target.files[0])}
				/>

				<Alert hidden={!imageError} variant={"danger"} className={"my-1 p-2 small text-center"}>
					{imageError}
				</Alert>

				<Alert hidden={!formData.image} variant={"success"} className={"my-1 p-2 small text-center"}>
					Изображение успешно загружено!
				</Alert>

				<Form.Check // prettier-ignore
					className={"my-2"}
					type="switch"
					label="Распродажа в категории"
					checked={formData.hasSale}
					onChange={() => setFormData({...formData, hasSale: !formData.hasSale})}
				/>

				<Button type={"submit"} size={"sm"} className={"w-100"} variant={"outline-primary"}>
					Отправить
				</Button>
			</Form>
		</div>
	);
};

export default CategoriesAdd;
