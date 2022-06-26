import React, { useEffect, useContext } from "react";
import { useToast } from "@chakra-ui/react";
import Header from "../components/header";
import { Context } from "../providers/provider";
import { connectMetamask } from "../helper/connectWallet";

export default function Root({ Component, pageProps }) {
	const toast = useToast();
	const { walletId, setWalletId, setConnected, connected } =
		useContext(Context);
	const autoConnect = async () => {
		let metaMask = await connectMetamask();
		if (metaMask) {
			console.log(metaMask);
			setWalletId(metaMask[0]);
			setConnected(true);
			toast({
				title: "Wallet Connected",
				description: "",
				status: "info",
				duration: 5000,
				isClosable: true,
				position: "top",
			});
		} else {
			console.log("wallet not connected");
		}
	};
	useEffect(() => {
		console.log("here");
		autoConnect();
	}, []);

	return (
		<div id="app">
			<div id="header">
				<Header />
			</div>
			<div id="app-center">
				<Component {...pageProps} />
			</div>
		</div>
	);
}
