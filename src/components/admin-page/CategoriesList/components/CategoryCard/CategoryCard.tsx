import React, {useState} from 'react';
import styles from "./CategoryCard.module.css";
import {ICategoryId} from "@/types/categories";
import {Button, ButtonGroup, Card} from "react-bootstrap";
import ModalConfirm from "@/ui/ModalConfirm/ModalConfirm";
import {handlePost} from "@/functions/handlePost";
import {API_CATEGORY} from "@/constants/api";
import {TOAST_ERROR, TOAST_SUCCESS} from "@/constants/toasts";
import {handleCutStr} from "@/functions/handleCutStr";

interface ICategoryCard {
	data: ICategoryId,
}

const CategoryCard: React.FC<ICategoryCard> = ({ data }) => {

	const [showModal, setShowModal] = useState<boolean>(false);
	const [load, setLoad] = useState<boolean>(false);

	const handleDelete = () => {
		setLoad(true);
		handlePost("DELETE", API_CATEGORY, data)
			.then(() => TOAST_SUCCESS("Категория успешно удалена"))
			.catch(() => TOAST_ERROR("Ошибка удаления категории"))
			.finally(() => setLoad(false))
	}

	return (
		<>
			<Card className={styles.CategoryCard}>
				<Card.Img className={styles.img} variant="top" src={data.image} />
				<Card.Body>
					<Card.Title>{data.name}</Card.Title>
					<Card.Text className={"small"}>
						{handleCutStr(data?.description, 80) || "Без описания"}
					</Card.Text>

					<ButtonGroup className={"w-100"}>
						<Button variant="secondary" size={"sm"}>
							Изменить
						</Button>
						<Button variant="danger" size={"sm"} onClick={() => setShowModal(true)}>
							Удалить
						</Button>
					</ButtonGroup>
				</Card.Body>
			</Card>

			<ModalConfirm
				show={showModal}
				title={`Удаление категории "${data.name}"`}
				handleClose={() => setShowModal(false)}
				handleConfirm={handleDelete}
				load={load}
			/>
		</>
	);
};

export default CategoryCard;
