import { Center, Container, Title } from '@mantine/core';
import useStyles from './About-style';

function About() {
	const { classes } = useStyles();
	return (
		<>
			<Container pt={60}>
				<Center>
					<Title className={classes.h1}>
						<span className={classes.greenText}>#About </span>
						The Event
					</Title>
				</Center>

				<Center>
					<p className={classes.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
						ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					</p>
				</Center>
			</Container>
		</>
	);
}

export default About;