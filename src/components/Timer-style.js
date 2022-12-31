import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
	imgLeft: {
		position: "absolute",
		left: 0,
		left: 0,
		width: "90px",
		objectFit: "cover",
		[theme.fn.smallerThan("sm")]: {
			width: "60px",
		},
	},
	imgRight: {
		position: "absolute",
		right: 0,
		top: 0,
		width: "83px",
		objectFit: "cover",
		[theme.fn.smallerThan("sm")]: {
			width: "52px",
		},

	},
	Square: {
		width: "100px",
		height: "100px",
		borderRadius: 0,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		fontSize: theme.fontSizes.xl * 2,
		fontWeight: 700,
		color: "white",
		[theme.fn.smallerThan("sm")]: {
			fontSize: theme.fontSizes.xl * 1.5,
			width: "80px",
			height: "80px",
		},
	},
	SmallFont: {
		fontSize: theme.fontSizes.sm,
	},
}));

export default useStyles;