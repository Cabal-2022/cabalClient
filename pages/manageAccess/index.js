import React from "react";
import { useRouter } from "next/router";
import { Button } from "@chakra-ui/react";

export default function ManageAccess() {
	const router = useRouter();

	return (
		<div className="manage-access">
			<h2 className="Title">Manage Access</h2>
			{/* <button
				onClick={() => {
					router.push("/manageAccess/glah");
				}}>
				<p>go to "glah"</p>
			</button> */}
			<div className="services-container"></div>
		</div>
	);
}
