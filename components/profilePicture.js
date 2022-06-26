import { Avatar } from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";
import NoProfilePic from "../assets/img/noProfile.png";
export default function ProfilePicture({ size }) {
	const [hasPicture, setHasPicture] = useState(false);
	const [picture, setPicture] = useState(null);
	return <Avatar src={hasPicture ? picture : NoProfilePic} size={size} />;
}
