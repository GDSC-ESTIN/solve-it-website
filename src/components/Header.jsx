import { Center, Container, Title } from '@mantine/core';
import useStyles from './Header-style';



function Header() {
	const { classes } = useStyles();
	return (
		<>
			<Container pt={60}>
				<Center>
					<Title className={classes.h1}>
						<span className={classes.blueText}>#solve-it </span>
						event is HERE!
					</Title>
				</Center>

				<Center>
					<p className={classes.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
						ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					</p>
				</Center>

				<Center>
					<b >
						The event starts in
					</b>
				</Center>
			</Container>
		</>
	);
}

export default Header;