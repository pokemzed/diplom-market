import React, {useState} from 'react';
import {Button, ButtonGroup, Card} from "react-bootstrap";
import {IProductId} from "@/types/products";

interface IProductPrice {
	data: IProductId,
}

const ProductPrice: React.FC<IProductPrice> = ({ data }) => {

	const [selectedWeight, setSelectedWeight] = useState(data?.weights?.[0].value);

	return (
		<>
			<ButtonGroup size={"sm"} className={"w-100 mb-1"}>
				{
					data?.weights?.map(elem => (
						<Button
							key={elem.value}
							active={elem.value === selectedWeight}
							variant={"outline-primary"}
							onClick={() => setSelectedWeight(elem.value)}
						>
							{elem.title}
						</Button>
					))
				}
			</ButtonGroup>

			<Card.Text className={"mb-2 small"}>
				<b style={{ marginRight: 3 }}>Цена за {selectedWeight} грамм:</b>
				{data?.prices?.find(elem => elem.weight === selectedWeight)?.price}₽/шт
			</Card.Text>
		</>
	);
};

export default ProductPrice;
