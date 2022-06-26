import { FormControl, FormLabel } from "@chakra-ui/react";
import React from "react";

export default function AddName(params) {
	return (
		<div className="page add-data">
			<div class="header">
				<h2>Add Name To Cabal</h2>
			</div>
			<div class="content">
				<FormControl>
					<FormLabel>First</FormLabel>
				</FormControl>
			</div>
		</div>
	);
}
