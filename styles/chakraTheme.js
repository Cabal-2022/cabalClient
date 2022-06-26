import { extendTheme } from "@chakra-ui/react";
const config = {
	initialColorMode: "light",
	useSystemColorMode: false,
};
const colors = {
	primary: "#3da9fc",
	primaryLight: "#094067",
	primaryDark: "#83ccf4",
	text: "#021929",
	textSecondary: "#192934",
	background: "#fcfcfc",
	foreground: "#e9e9e9",
	accent: "#ef4565",
	success: "#29ab45",
	danger: "#F66363",
	link: "#0645ad",
};
const components = {
	Button: {
		baseStyle: {
			margin: 0.5,
			_hover: { opacity: "75%" },
			_focus: {
				boxShadow: "none",
			},
		},
		variants: {
			contained: {
				color: "white",
				backgroundColor: colors.primary,
			},
			danger: {
				color: "white",
				backgroundColor: colors.danger,
			},
			success: {
				color: "white",
				backgroundColor: colors.success,
			},
			outlined: {
				borderWidth: 1,
				borderStyle: "solid",
				borderColor: colors.text,
				color: colors.text,
				_hover: { backgroundColor: colors.foreground },
			},
			text: {
				_hover: { backgroundColor: colors.foreground },
			},
			link: {
				color: colors.link,
				_hover: { backgroundColor: colors.foreground },
			},
		},

		defaultProps: {
			variant: "contained",
		},
	},

	IconButton: {
		variants: {
			text: {
				backgroundColor: "transparent",
			},
		},
	},
	Tooltip: {
		baseStyle: {
			borderRadius: 5,
			backgroundColor: colors.foreground,
			color: colors.text,
		},
	},
	Alert: {
		backgroundColor: "red",
	},
	Input: {
		baseStyle: {
			backgroundColor: colors.primary,
			borderWidth: 5,
			borderColor: colors.text,
			borderStyle: "solid",
		},
		variants: {
			filled: {
				backgroundColor: colors.foreground,
			},
		},
	},
	Switch: {
		baseStyle: {
			backgroundColor: colors.primary,
		},
	},
	Popover: {
		variants: {
			primary: {
				backgroundColor: colors.foreground,
			},
		},
	},
	Tag: {
		variants: {
			contained: {
				color: "white",
				backgroundColor: colors.primary,
			},
			danger: {
				color: "white",

				backgroundColor: colors.danger,
			},
			outlined: {
				borderWidth: 1,
				borderStyle: "solid",
				borderColor: colors.secondaryText,
				color: colors.text,
				_hover: { backgroundColor: colors.foreground },
			},
			text: {
				_hover: { backgroundColor: colors.foreground },
			},
			filled: {
				backgroundColor: colors.foreground,
				_hover: {
					opacity: 0.75,
				},
			},
		},
	},
	Drawer: {
		parts: ["dialog", "header", "body"],
		variants: {
			primary: {
				dialog: {
					backgroundColor: colors.foreground,
				},
			},
		},
		defaultProps: {
			variant: "contained",
		},
	},
};

const chakraTheme = extendTheme({ components, colors, config });
export default chakraTheme;
