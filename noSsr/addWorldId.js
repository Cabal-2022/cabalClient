import React, { useState, useEffect, useContext } from "react";
import worldID from "@worldcoin/id"; // If you installed the JS package as a module
import { Context } from "../providers/provider";
import { Waveform } from "@uiball/loaders";

export default function AddWorldId() {
	const { walletId } = useContext(Context);
	const [loading, setLoading] = useState(false);
	const getWorldId = async () => {
		setLoading(true);
		if (!worldID.isInitialized()) {
			worldID.init("world-id-container", {
				//		enable_telemetry: true,
				action_id: "wid_ffd5517edf0edab10e52c67a05397a46", // <- use the address from the Developer Portal
				signal: walletId,
			});
		}
		setLoading(false);

		try {
			const result = await worldID.enable();
			//	worldID.enable().then(() => callback())
			console.log("World ID verified successfully:", result);
		} catch (failure) {
			console.warn("World ID verification failed:", failure);
			// Re-activate here so your end user can try again
		}
	};

	return (
		<div className="page">
			<button onClick={async () => await getWorldId()}>Get QR Code</button>
			{loading && <Waveform />}
			<div id="world-id-container"></div>
		</div>
	);
}
