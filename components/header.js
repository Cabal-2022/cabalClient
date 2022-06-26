import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import Logo from "../assets/img/logo.png";
import { Button } from "@chakra-ui/react";
import { Context } from "../providers/provider";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Header() {
	const router = useRouter();
	const { connected } = useContext(Context);
	return (
		<header>
			<button className="logo" onClick={() => router.push("/")}>
				<Image name={"Logo"} src={Logo} width="30px" height="30px" alt="Logo" />
				<h4>Cabal Protocol</h4>
			</button>
			<a href="https://adamfarid453.github.io/CabalDocs/">
				<Button variant="text">Documentation</Button>
			</a>
			{connected && (
				<>
					<Button variant="text" onClick={() => router.push("/dashboard")}>
						Dashboard
					</Button>
				</>
			)}
			<span className="connect">
				<ConnectButton />
			</span>
		</header>
	);
}
