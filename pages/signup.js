import React, { useState } from "react";
import { Button } from "@chakra-ui/react";
import Image from "next/image";
import Security from "../assets/signup/security.png";
import Welcome from "../assets/signup/welcome.svg";
import Step1 from "../assets/signup/number-one.png";
import Step2 from "../assets/signup/number-2.png";
import Step3 from "../assets/signup/number-3.png";
import WorldIDLogo from "../assets/sponsors/worldcoin.png";
import NameIcon from "../assets/signup/name.png";
import EmailIcon from "../assets/signup/email.png";
import { useRouter } from "next/router";
export default function SignUp({}) {
	const router = useRouter();
	const [data1, setData1] = useState(``);
	const [arrowVisible, setArrowVisible] = useState(false);

	const steps = [
		{
			title: "Encrypt",
			description:
				"All data on the Cabal network is encrypted and stored off chain for maximum security & privacy. ",
			imgSrc: Step1,
			alt: "step 1",
		},
		{
			title: "Grant",
			description:
				"Services and Contracts won't be able to access any of your data without your permission",
			imgSrc: Step2,
			alt: "step 2",
		},
		{
			title: "Revoke",
			description:
				"Ultimately, your data is your. Revoking access prevents services and contracts from every accessing your data again",
			imgSrc: Step3,
			alt: "step 3",
		},
	];
	const connections = [
		{
			title: "Name",
			description: "Who Are You?",
			imgSrc: NameIcon,
			imgAlt: "person icon",
			url: "/data/addName",
		},
		{
			title: "Email",
			description: "Add one or multiple emails",
			imgSrc: EmailIcon,
			imgAlt: "email icon",
			url: "/data/addEmail",
		},
		{
			title: "World ID",
			description: "Add PPPoPP to your cabal identity",
			imgSrc: WorldIDLogo,
			imgAlt: "world Id logo",
			url: "/data/addWorldId",
		},
	];
	return (
		<div className="page sign-up ">
			<section className="welcome">
				<div className="content">
					<div class="text">
						<h2 className="fadeIn">Welcome!</h2>
						<h4>Let's Get You Set Up</h4>
						<a href="#why-we-built">
							<Button size={"lg"} isFullWidth>
								Continue
							</Button>
						</a>
					</div>
					<div class="img-container">
						<Image
							name={"Welcome"}
							src={Welcome}
							width="450px"
							height="375px"
							alt="welcome"
							className="welcome-img"
						/>
					</div>
				</div>
			</section>
			<section className="steps" id="why-we-built">
				<div class="header">
					<h1 className="subtle">Why We Built Cabal</h1>
				</div>
				<div class="content">
					<div class="text">
						<h2>Your Data Is Yours</h2>
						<h6>Control Who Accesses It</h6>
					</div>
					<div class="img-container">
						<Image
							name={"Security"}
							src={Security}
							width="250px"
							height="230px"
							alt="Security"
						/>
					</div>
				</div>
				<div class="footer">
					<a href="#how-it-works">
						<Button size="lg" isFullWidth>
							How It Works
						</Button>
					</a>
				</div>
			</section>
			<section className="steps" id="how-it-works">
				<div class="header">
					<h1 class="subtle">How It Works</h1>
				</div>
				<div class="content">
					<div class="text">
						<div class="steps">
							{steps.map((item) => {
								return (
									<div className="step">
										<div class="header">
											<Image
												name={"number"}
												src={item.imgSrc}
												width={"40px"}
												height={"40px"}
												alt={item.alt}
											/>
											<h3>{item.title}</h3>
										</div>
										<span>
											<p>{item.description}</p>
										</span>
									</div>
								);
							})}
						</div>
					</div>
				</div>
				<div class="footer">
					<a href="#get-started">
						<Button size="lg" isFullWidth>
							Get Started
						</Button>
					</a>
				</div>
			</section>
			<section class="get-started" id="get-started">
				<div class="header">
					<h2>Connect To A Data Type Contract</h2>
				</div>
				<div class="content">
					<div class="text">
						<div class="connections">
							{connections.map((item) => {
								return (
									<button
										class="connection"
										onClick={() => {
											router.push(`/${item.url}`);
										}}>
										<h4>{item.title}</h4>
										<div class="img-container">
											<Image
												name={"connection"}
												src={item.imgSrc}
												width="75px"
												height="75px"
												alt={item.alt}
											/>
										</div>

										<div class="text">
											<p>{item.description}</p>
										</div>
									</button>
								);
							})}
						</div>
					</div>
				</div>
				<div class="footer center">
					<div class="footer-content">
						<Button
							variant="outlined"
							onClick={() => {
								router.push("/");
							}}>
							Set Up Later
						</Button>
					</div>
				</div>
			</section>
		</div>
	);
}
