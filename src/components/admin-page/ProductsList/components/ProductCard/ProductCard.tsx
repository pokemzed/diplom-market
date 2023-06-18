import React, {useState} from 'react';
import styles from "./ProductCard.module.css";
import {Button, ButtonGroup, Card} from "react-bootstrap";
import {IProductId} from "@/types/products";
import SwiperNavigation from "@/ui/SwiperNavigation/SwiperNavigation";
import {handleRequest} from "@/functions/handleRequest";
import {API_PRODUCT} from "@/constants/api";
import {TOAST_ERROR, TOAST_SUCCESS} from "@/constants/toasts";
import {useGetProducts} from "@/hooks/useGetProducts";
import ModalConfirm from "@/ui/ModalConfirm/ModalConfirm";
import ProductPrice from "@/components/admin-page/ProductsList/components/ProductCard/ProductPrice";
import ProductRedact from "@/components/admin-page/ProductRedact/ProductRedact";
import ProductInfo from "@/components/admin-page/ProductsList/components/ProductCard/ProductInfo";
import {REQUEST_METHODS} from "@/types/general";

interface IProductCard {
	data: IProductId
}

const ProductCard: React.FC<IProductCard> = ({ data }) => {

	const { updateProducts } = useGetProducts();
	const [showDelete, setShowDelete] = useState(false);
	const [showRedact, setShowRedact] = useState(false);
	const [load, setLoad] = useState<boolean>(false);

	const handleDelete = () => {
		setLoad(true);
		handleRequest(REQUEST_METHODS.DELETE, API_PRODUCT, {itemIds: [data._id]})
			.then(() => {
				TOAST_SUCCESS("Товар успешно удален");
				updateProducts();
			})
			.catch(() => TOAST_ERROR("Ошибка удаления товара"))
			.finally(() => {
				setLoad(false);
				setShowDelete(false);
			})
	}

	return (
		<>
			<Card className={styles.ProductCard}>
				{/*SWIPER*/}
				<SwiperNavigation images={data.images} />

				<Card.Body>
					<Card.Title>{data.name}</Card.Title>

					{/*INFO*/}
					<ProductInfo data={data} />

					{/*PRICE AND WEIGHT*/}
					<ProductPrice data={data} />
				</Card.Body>

				<Card.Footer>
					<ButtonGroup className={"w-100"}>
						<Button variant="secondary" size={"sm"} onClick={() => setShowRedact(true)}>
							Изменить
						</Button>
						<Button variant="danger" size={"sm"} onClick={() => setShowDelete(true)}>
							Удалить
						</Button>
					</ButtonGroup>
				</Card.Footer>
			</Card>

			<ModalConfirm
				show={showDelete}
				title={`Удаление товара "${data.name}"`}
				handleClose={() => setShowDelete(false)}
				handleConfirm={handleDelete}
				load={load}
			/>

			<ProductRedact
				data={data}
				show={showRedact}
				handleClose={() => setShowRedact(false)}
			/>
		</>
	);
};

export default ProductCard;
