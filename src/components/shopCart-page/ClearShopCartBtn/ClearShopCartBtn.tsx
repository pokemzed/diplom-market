import React, {useState} from 'react';
import {useAppDispatch} from "@/store/store";
import {clearShopCart} from "@/store/slices/shopCartSlice";
import {Button} from "react-bootstrap";
import ModalConfirm from "@/ui/ModalConfirm/ModalConfirm";
import {TOAST_SUCCESS} from "@/constants/toasts";


const ClearShopCartBtn = () => {

	const [show, setShow] = useState<boolean>(false);
	const dispatch = useAppDispatch();

	const handleClear = () => {
		dispatch(clearShopCart());
		TOAST_SUCCESS("Корзина очищена!");
	}

	return (
		<div className={"ClearShopCartBtn"}>
			<Button variant={"danger"} onClick={() => setShow(true)}>
				Очистить корзину
			</Button>

			<ModalConfirm
				show={show}
				title={"Очистить корзину"}
				handleClose={() => setShow(false)}
				handleConfirm={handleClear}
				load={false}
			/>
		</div>
	);
};

export default ClearShopCartBtn;
