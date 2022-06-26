import React, { useState, useContext } from "react";
import { Context } from "../providers/provider";
import {
	Button,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
} from "@chakra-ui/react";
import ManageDataTypeAccessCard from "./manageDataTypeAccessCard";

export default function ManageAccess({}) {
	const [name, setName] = useState("");
	const { walletId } = useContext(Context);

	const newServices = [
		{
			serviceWalletId: "0x1234",
			serviceName: "FaceBook",
			allowedDataTypes: [
				{
					dataTypeAddress: "0x2345",
					dataTypeName: "Name",
					allowAccess: true,
				},
				{
					dataTypeAddress: "0x2345",
					dataTypeName: "Birthday",
					allowAccess: false,
				},
				{
					dataTypeAddress: "0x2345",
					dataTypeName: "SSN",
					allowAccess: false,
				},
			],
		},
		{
			serviceWalletId: "0x3456",
			serviceName: "GitHub",
			allowedDataTypes: [
				{
					dataTypeAddress: "0x2345",
					dataTypeName: "Name",
					allowAccess: true,
				},
				{
					dataTypeAddress: "0x2345",
					dataTypeName: "Birthday",
					allowAccess: true,
				},
				{
					dataTypeAddress: "0x2345",
					dataTypeName: "SSN",
					allowAccess: false,
				},
			],
		},
	];

	return (
		<div className="manage-access">
			<h4>Manage Access</h4>
			<div className="services-container">
				{newServices.map((item) => {
					return (
						<>
							<Accordion allowToggle>
								<AccordionItem>
									<AccordionButton>
										<h5>{item.serviceName}</h5>
										<AccordionIcon />
									</AccordionButton>
									<AccordionPanel>
										<span className="row-end">
											<Button
												size="sm"
												onClick={() => {
													router.push(`/manageAccess/${item.id}`);
												}}>
												More Details
											</Button>
											<Button size="sm" variant="danger">
												Revoke All To All
											</Button>
										</span>
										<div class="data-type header">
											<h6>Data Type</h6>
											<h6>Allow Access?</h6>
										</div>

										{item.allowedDataTypes.map((dataType, idx) => {
											return (
												<ManageDataTypeAccessCard
													item={dataType}
													idx={idx}
													service={item.serviceName}
												/>
											);
										})}
									</AccordionPanel>
								</AccordionItem>
							</Accordion>
						</>
					);
				})}
			</div>
		</div>
	);
}
