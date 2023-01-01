import { createStyles } from "@mantine/core";

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
	root: {
		position: "relative",
		zIndex: 10,
		borderBottom: "none",
		[theme.fn.smallerThan("sm")]: {
			position: "sticky",
		},
	},

	dropdown: {
		paddingBottom: theme.spacing.xl,
		position: "absolute",
		top: HEADER_HEIGHT,
		left: 0,
		right: 0,
		zIndex: 0,
		borderTopRightRadius: 0,
		borderTopLeftRadius: 0,
		borderTopWidth: 0,
		borderBottom: "none",
		boxShadow: "8px 13px 30px -8px rgba(0,0,0,0.32)",
		WebkitBoxShadow: "8px 13px 30px -8px rgba(0,0,0,0.32)",
		mozBoxShadow: "8px 13px 30px -8px rgba(0,0,0,0.32)",
		overflow: "hidden",

		[theme.fn.largerThan("sm")]: {
			display: "none"
		}
	},

	header: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		height: "100%"
	},

	links: {
		[theme.fn.smallerThan("sm")]: {
			display: "none"
		}
	},

	burger: {
		[theme.fn.largerThan("sm")]: {
			display: "none"
		}
	},

	link: {
		display: "block",
		lineHeight: 1,
		padding: "8px 12px",
		borderRadius: theme.radius.sm,
		textDecoration: "none",
		color:
			theme.colorScheme === "dark"
				? theme.colors.dark[0]
				: theme.colors.gray[7],
		fontSize: theme.fontSizes.sm,
		fontWeight: 500,

		[theme.fn.largerThan("sm")]: {
			"&:after": {
				paddingBottom: "5px",
				display: "block",
				content: '""',
				borderBottom: `solid 3px ${theme.colors.indigo[5]}`,
				transform: "scaleX(0)",
				transition: "transform 250ms ease-in-out"
			},
			"&:hover:after": {
				transform: "scaleX(1)",
				transformOrigin: "50% 50%"
			}
		},

		[theme.fn.smallerThan("sm")]: {
			marginLeft: theme.spacing.md * 3,
			marginRight: theme.spacing.md * 3,
			marginBottom: theme.spacing.md,
			marginTop: theme.spacing.md,
			fontSize: theme.fontSizes.xl,
			borderRadius: 0,
			padding: theme.spacing.md,
			textAlign: "center",
			color: theme.colors.gray[9],
			"&:hover": {
				color: theme.colors.blue[5]
			},
			borderBottom: "1px solid #DADADA"
		}
	},

	linkActive: {
		fontWeight: "bold",
		[theme.fn.largerThan("sm")]: {
			"&:after": {
				fontWeight: 700,
				display: "block",
				content: '""',
				borderBottom: `solid 3px ${theme.colors.indigo[5]}`,
				transform: "scaleX(1)",
				transformOrigin: "50% 50%"
			},
			"&:hover:after": {
				transform: "scaleX(1)",
				transformOrigin: "50% 50%"
			}
		}
	}
}));

export default useStyles;
