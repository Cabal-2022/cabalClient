import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
} from "@chakra-ui/react";
export default function NewDataTypeOption({ item }) {
	const [visible, setVisible] = useState(false);
	return (
		<div>
			<Button
				variant="text"
				onClick={() => {
					setVisible(true);
				}}
				leftIcon={item.icon}>
				{item.text}
			</Button>
			<Modal isOpen={visible} size={"lg"} onClose={() => setVisible(false)}>
				<ModalOverlay />
				<ModalContent className={"custom-modal"}>
					<ModalHeader>{item.title}</ModalHeader>
					<ModalCloseButton />
					<ModalBody>Helo</ModalBody>
				</ModalContent>
			</Modal>
		</div>
	);
}
