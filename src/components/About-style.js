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
	greenText: {
		color: '#0F9D58',
	},
	paragraph: {
		fontSize: '1.2rem',
		lineHeight: 1.5,
		marginBottom: '1.5rem',
		textAlign: 'center',
		fontWeight: 500,
		[theme.fn.smallerThan('sm')]: {
			fontSize: '1rem',
		},
	},
}));


export default useStyles;	