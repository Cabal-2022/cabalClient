import React, { createContext } from "react";
import AllData from "./context";

export const Context = createContext("");

export const Provider = ({ children }) => {
	const data = AllData();
	return <Context.Provider value={data}>{children}</Context.Provider>;
};
