import React, { useState } from "react";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Switch,
	Button,
	FormControl,
} from "@chakra-ui/react";
export default function ManageDataTypeAccessCard({ item, idx, service }) {
	const [visible, setVisible] = useState(false);
	return (
		<div>
			<button
				className={`data-type ${idx % 2 ? "" : "odd"}`}
				onClick={() => setVisible(true)}>
				<p>{item.dataTypeName}</p>
				<Switch
					isChecked={item.allowAccess}
					className={`custom-switch ${
						item.allowAccess ? "checked" : "unchecked"
					}`}
				/>
			</button>
			<Modal isOpen={visible} size={"lg"} onClose={() => setVisible(false)}>
				<ModalOverlay />
				<ModalContent className={"custom-modal"}>
					<ModalHeader>
						{item.allowAccess ? (
							<div>
								{/* changing to revoke acesss */}
								<h5>Revoke {service}'s' Access?</h5>
							</div>
						) : (
							<div>
								<h6>Grant {service} Access?</h6>
							</div>
						)}
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						{item.allowAccess ? (
							<div>
								{/* changing to revoke acesss */}
								<p>
									{service} will no longer have access to your{" "}
									<u>{item.dataTypeName}</u>
								</p>
								<Button variant={"danger"}>Yes, Revoke Access</Button>
							</div>
						) : (
							<div>
								<p>
									{service} will be able to access to your{" "}
									<u> {item.dataTypeName}</u>
								</p>
								<Button variant="success">Yes, Grant Access</Button>
							</div>
						)}
					</ModalBody>
				</ModalContent>
			</Modal>
		</div>
	);
}
