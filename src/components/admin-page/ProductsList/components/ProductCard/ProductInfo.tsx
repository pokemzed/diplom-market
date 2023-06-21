import React from 'react';
import {IProductId} from "@/types/products";
import {Card} from "react-bootstrap";
import {handleCutStr} from "@/functions/handleCutStr";
import {useGetCategories} from "@/hooks/useGetCategories";

interface IProductInfo {
	data: IProductId,
}

const ProductInfo: React.FC<IProductInfo> = ({ data }) => {

	const { data: {categories} } = useGetCategories();

	return (
		<>
			<Card.Text className={"mb-1 small"}>
				<b>Описание:</b> {handleCutStr(data?.description, 80) || "Без описания"}
			</Card.Text>
			<Card.Text className={"mb-1 small"}>
				<b>Состав:</b> {handleCutStr(data?.composition, 80) || "Без состава"}
			</Card.Text>
			{
				categories?.length &&
				<Card.Text className={"mb-1 small"}>
					<b>Категория:</b> {categories?.find(elem => elem._id === data.categoryId)?.name}
				</Card.Text>
			}
			<Card.Text className={"mb-1 small"}>
				<b>Скидка:</b> {data?.discount}%
			</Card.Text>
			<Card.Text className={"mb-1 small"}>
				<b>В наличии:</b> {!!data?.available ? "Да" : "Нет"}
			</Card.Text>
		</>
	);
};

export default ProductInfo;
