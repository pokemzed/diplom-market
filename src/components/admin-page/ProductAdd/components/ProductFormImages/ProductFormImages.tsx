import React from 'react';
import {FloatingLabel, FormControl} from "react-bootstrap";
import {IProduct, IProductId} from "@/types/products";
import {convertToBase64} from "@/functions/convertToBase64";
import styles from "./ProductFormImages.module.css";

interface IProductFormImages {
	formData: IProduct | IProductId,
	setFormData: (formData: IProduct | IProductId) => void,
}

const ProductFormImages: React.FC<IProductFormImages> = ({ formData, setFormData }) => {

	const handleUploadFiles = async (images:Blob[]) => {
		const imagesInner:string[] = [];
		for (let elem of images) {
			const res = await handleSetFile(elem);
			imagesInner.push(String(res))
		}
		setFormData({...formData, images: imagesInner})
	}

	const handleSetFile = async (file:Blob | undefined) => {
		if (!file) return;
		return convertToBase64(file)
	};

	return (
		<div className={styles.ProductFormImages}>
			<FloatingLabel label={"Загрузите фото товара"}>
				<FormControl
					type={"file"} multiple={true}
					//@ts-ignore
					onChange={e => handleUploadFiles(e.target.files)}
				/>
			</FloatingLabel>

			<div hidden={!formData.images.length} className={styles.imagesContainer}>
				{
					formData.images.map(elem => (
						<img src={elem} key={elem} alt={"image"}/>
					))
				}
			</div>
		</div>
	);
};

export default ProductFormImages;
