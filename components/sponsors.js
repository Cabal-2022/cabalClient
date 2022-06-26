import Image from "next/image";
import React from "react";

import WorldCoinLogo from "../assets/sponsors/worldcoin.png";
import IPFSLogo from "../assets/sponsors/ipfs.png";
import WalletConnectLogo from "../assets/sponsors/walletConnect.png";
import RainbowKitLogo from "../assets/sponsors/rainbowkit.png";

export default function Sponsors() {
	const sponsors = [
		{
			name: "World Coin",
			img: WorldCoinLogo,
			alt: "world coin logo",
			url: "https://worldcoin.org/",
		},
		{
			name: "IPFS",
			img: IPFSLogo,
			alt: "IFPS logo",
			url: "https://ipfs.io/",
		},
		{
			name: "Wallet Connect",
			img: WalletConnectLogo,
			alt: "Wallet Connect logo",
			url: "https://walletconnect.com/",
		},
		{
			name: "RainbowKit",
			img: RainbowKitLogo,
			alt: "Rainbowkit logo",
			url: "https://www.rainbowkit.com/",
		},
	];

	return (
		<div className="sponsors">
			{sponsors.map((item) => {
				return (
					<a href={item.url} target="_blank" className="sponsor">
						<Image
							name={item.name}
							src={item.img}
							height="60px"
							width="60px"
							alt={item.alt}
						/>
					</a>
				);
			})}
		</div>
	);
}
