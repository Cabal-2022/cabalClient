import React from "react";
import { Button, FormControl, Input } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Image from "next/image";
import LandingImage from "../assets/img/landing.svg";
import Sponsors from "../components/sponsors";

export default function Home() {
	const router = useRouter();

	return (
		<div className="page index">
			<section className="landing">
				<div className="content">
					<h1>oAuth For The Open Internet</h1>
					<h5>Authenticate Trustlessly</h5>
					<div class="buttons">
						<Button onClick={() => router.push("/signup")} isFullWidth>
							Get Started
						</Button>
						<Button
							variant="link"
							onClick={() => {
								// todo: documentation link
							}}>
							Start Developing
						</Button>
					</div>
				</div>
				<div class="img-container">
					<Image
						name="landing image"
						src={LandingImage}
						height="500px"
						width="400px"
						alt="login"
					/>
				</div>
				<div class="footer">
					<Sponsors />
				</div>
			</section>
		</div>
	);
}
