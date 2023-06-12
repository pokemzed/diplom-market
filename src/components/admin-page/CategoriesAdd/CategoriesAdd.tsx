'use client'
import React, {FormEvent, useState} from 'react';
import {Alert, Badge, Button, Form, FormControl, Spinner} from "react-bootstrap";
import styles from "./CategoriesAdd.module.css";
import {convertToBase64} from "@/functions/convertToBase64";
import {CATEGORY_INITIAL} from "@/constants/categories";
import {ICategory} from "@/types/categories";
import {API_CATEGORY} from "@/constants/api";
import {handlePost} from "@/functions/handlePost";
import {TOAST_ERROR, TOAST_SUCCESS} from "@/constants/toasts";

const CategoriesAdd = () => {

	const [formData, setFormData] = useState<ICategory>(CATEGORY_INITIAL);
	const [load, setLoad] = useState<boolean>(false);

	const handleFileUpload = async (file:Blob | undefined) => {
		if (!file) return;
		convertToBase64(file)
			// @ts-ignore
			.then(res => setFormData({...formData, image: res}))
			.catch(() => TOAST_ERROR("Ошибка конвертации, выберите другое изображение."))
	};

	const handleSend = (e:FormEvent) => {
		e.preventDefault();

		if (!formData.image) {
			TOAST_ERROR("Загрузите изображение для категории!")
			return;
		}

		setLoad(true);
		handlePost("POST", API_CATEGORY, formData)
			.then(() => TOAST_SUCCESS('Категория успешно добавлена'))
			.catch(() => TOAST_ERROR('Ошибка добавления категории'))
			.finally(() => {
				setFormData(CATEGORY_INITIAL)
				setLoad(false)
			})
	}

	return (
		<div className={styles.CategoriesAdd}>
			<Badge className={"w-100 mb-2 text-center"}>Добавить категорию</Badge>

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

				<Button disabled={load} type={"submit"} size={"sm"} className={"w-100"} variant={"outline-primary"}>
					{load ? <Spinner size={"sm"} /> : 'Отправить'}
				</Button>
			</Form>
		</div>
	);
};

export default CategoriesAdd;
