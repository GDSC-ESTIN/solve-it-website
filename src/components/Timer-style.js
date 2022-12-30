import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
	imgLeft: {
		position: "absolute",
		left: 0,
		left: 0,
		width: "100px",
		objectFit: "cover",
	},
	imgRight: {
		position: "absolute",
		right: 0,
		top: 0,
		width: "80px",
		objectFit: "cover",

	},
	////create function that takes as an argument a number (of two digits) and a colors, and returns a square with the number in the middle and the color as the background
	Square: {
		//no need for the background color, it will be passed as an argument
		//the box has a button and a small text (newline)
		//style for the small text is done, dont worry about it

		width: "100px",
		height: "100px",
		borderRadius: 0,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		fontSize: theme.fontSizes.xl * 2,
		fontWeight: 700,
		color: "white"
	},
	SmallFont: {
		fontSize: theme.fontSizes.sm,
	},
}));

export default useStyles;