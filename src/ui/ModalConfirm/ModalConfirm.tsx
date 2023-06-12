import React from 'react';
import {Modal, Button, Badge, Spinner} from "react-bootstrap";

interface IModalConfirm {
	show: boolean,
	title: string,
	handleClose: () => void,
	handleConfirm: () => void,
	load: boolean,
}

const ModalConfirm: React.FC<IModalConfirm> = ({ show, handleClose, title, handleConfirm, load }) => {
	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Подтвердить действие</Modal.Title>
			</Modal.Header>

			<Modal.Body>
				Вы подтверждаете<Badge className={"mx-1"}>{title}</Badge>?
			</Modal.Body>

			<Modal.Footer>
				<Button size={"sm"} variant="secondary" onClick={handleClose}>
					Отмена
				</Button>
				<Button size={"sm"} variant="primary" onClick={handleConfirm}>
					{load ? <Spinner size={"sm"} /> : 'Подтвердить'}
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default ModalConfirm;
