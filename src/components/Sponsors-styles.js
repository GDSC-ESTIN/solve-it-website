import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
	h1: {
		fontSize: '2.5rem',
		fontWeight: 800,
		lineHeight: 1.2,
		marginBottom: '1rem',
		textAlign: 'center',
		[theme.fn.smallerThan('sm')]: {
			fontSize: '1.8rem',
		},
	},
	yellowText: {
		color: '#FBBC05',
	},
	circle: {
		width: " 100px",
		height: "100px",
		backgroundColor: "white",
		borderRadius: "50%",
	}
}));


export default useStyles;	