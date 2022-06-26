// File: Reusable loading wrapper
// Default
import React from "react";
// Libraries
import { DotSpinner, RaceBy, Ripples, Waveform } from "@uiball/loaders";

export default function LoadingWrapper({ loading, children, type, size }) {
	const loadColor = "#3da9fc";
	if (loading) {
		return (
			<div className="loading-container">
				{(!type || type === "wave") && (
					<Waveform className="loader" color={loadColor} />
				)}
				{type === "bar" && <RaceBy className="loader" color={loadColor} />}
				{type === "ripples" && <Ripples className="loader" color={loadColor} />}
				{type === "dot-spinner" && (
					<DotSpinner className="loader" color={loadColor} size={size} />
				)}
			</div>
		);
	} else return children;
}
