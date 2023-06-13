import React, {useState} from 'react';
import styles from "./CategoryCard.module.css";
import {ICategoryId} from "@/types/categories";
import {Badge, Button, ButtonGroup, Card} from "react-bootstrap";
import ModalConfirm from "@/ui/ModalConfirm/ModalConfirm";
import {handleRequest} from "@/functions/handleRequest";
import {API_CATEGORY} from "@/constants/api";
import {TOAST_ERROR, TOAST_SUCCESS} from "@/constants/toasts";
import {handleCutStr} from "@/functions/handleCutStr";
import CategoriesRedact from "@/components/admin-page/CategoriesRedact/CategoriesRedact";
import {useGetCategories} from "@/hooks/useGetCategories";

interface ICategoryCard {
	data: ICategoryId,
}

const CategoryCard: React.FC<ICategoryCard> = ({ data }) => {

	const { updateCategories } = useGetCategories();
	const [showDelete, setShowDelete] = useState<boolean>(false);
	const [showRedact, setShowRedact] = useState<boolean>(false);
	const [load, setLoad] = useState<boolean>(false);

	const handleDelete = () => {
		setLoad(true);
		handleRequest("DELETE", API_CATEGORY, { categoryIds: [data._id]})
			.then(() => {
				TOAST_SUCCESS("Категория успешно удалена");
				updateCategories();
			})
			.catch(() => TOAST_ERROR("Ошибка удаления категории"))
			.finally(() => {
				setLoad(false);
				setShowDelete(false);
			})
	}

	return (
		<>
			<Card className={styles.CategoryCard}>
				<Card.Img className={styles.img} variant="top" src={data.image} />
				<Card.Body>
					<Card.Title>{data.name}</Card.Title>
					<Card.Text className={"mb-1 small"}>
						{handleCutStr(data?.description, 80) || "Без описания"}
					</Card.Text>
					<Badge className={"mb-3"} bg={data.hasSale ? "success" : "secondary"}>
						Распродажа в категории: {data.hasSale ? "Да" : "Нет"}
					</Badge>

					<ButtonGroup className={"w-100"}>
						<Button variant="secondary" size={"sm"} onClick={() => setShowRedact(true)}>
							Изменить
						</Button>
						<Button variant="danger" size={"sm"} onClick={() => setShowDelete(true)}>
							Удалить
						</Button>
					</ButtonGroup>
				</Card.Body>
			</Card>

			<ModalConfirm
				show={showDelete}
				title={`Удаление категории "${data.name}"`}
				handleClose={() => setShowDelete(false)}
				handleConfirm={handleDelete}
				load={load}
			/>

			<CategoriesRedact
				show={showRedact}
				handleClose={() => setShowRedact(false)}
				data={data}
			/>
		</>
	);
};

export default CategoryCard;
