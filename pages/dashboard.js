import React, { useState, useContext } from "react";
import ProfileInfoButton from "../components/profileInfoButton";
import ProfilePicture from "../components/profilePicture";
import { Context } from "../providers/provider";

import ManageAccess from "../components/manageAccess";

export default function ProfilePage(params) {
	const { walletId } = useContext(Context);

	let informationCards = [
		{
			title: "Name",
			value: "Brendan",
			dataTypeAddress: false,
		},
		{
			title: "Email",
			value: "bprobst1029@gmail.com",
			dataTypeAddress: false,
		},

		{
			title: "Birthday",
			value: null,
			dataTypeAddress: false,
		},
		{
			title: "World ID",
			value: null,
			dataTypeAddress: false,
		},
		{
			title: "SSN",
			value: "123-45-6789",
			dataTypeAddress: false,
		},
		{
			title: "Address",
			value: "1 Castle Point Terrace, Hoboken NJ 07030",
			dataTypeAddress: false,
		},
		{ title: "Phone Number", value: "9-11", dataTypeAddress: false },
	];

	return (
		<div class="page profile">
			<div class="header">
				<ProfilePicture size={"lg"} />
				<span>
					<div class="top">
						<h4>Name</h4>
					</div>
					<div class="bottom">
						<p>{walletId}</p>
					</div>
				</span>
			</div>
			<div class="content">
				<div class="buttons">
					{informationCards.map((item, idx) => {
						return <ProfileInfoButton item={item} key={item.title} idx={idx} />;
					})}
				</div>
			</div>
			<ManageAccess />
		</div>
	);
}
