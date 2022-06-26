import React from "react";
import {
	Button,
	Popover,
	PopoverArrow,
	PopoverContent,
	PopoverHeader,
	PopoverTrigger,
	Portal,
	Select,
} from "@chakra-ui/react";
import NewDataTypeOption from "./newDataTypeOption";
import { BsFillPersonFill } from "react-icons/bs";
export default function SelectNewDataType() {
	// name
	//worldCoin
	//
	const options = [
		{
			text: "Name",
			value: "name",
			title: "Add Name",
			dataType: "",
			icon: <BsFillPersonFill />,
		},
	];
	return (
		<div>
			<Popover>
				<PopoverTrigger>
					<Button>Add More Data Types</Button>
				</PopoverTrigger>
				<Portal>
					<PopoverContent className="custom-popover">
						<PopoverArrow className="popover-arrow" />
						<PopoverHeader></PopoverHeader>
						{options.map((item) => {
							return <NewDataTypeOption item={item} />;
						})}
					</PopoverContent>
				</Portal>
			</Popover>
		</div>
	);
}
