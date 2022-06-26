import { useMemo, useState } from "react";

const AllData = () => {
	const [walletId, setWalletId] = useState("");
	const [loggedIn, setLoggedIn] = useState(false);
	const [connected, setConnected] = useState(false)
	const provider = useMemo(
		() => ({
			loggedIn,
			setLoggedIn,
			walletId,
			setWalletId,
			connected,
			setConnected
		}),
		[walletId, setWalletId, setLoggedIn, loggedIn,connected,setConnected]
	);
	return provider;
};

export default AllData;
