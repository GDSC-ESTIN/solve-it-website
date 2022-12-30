import { Center, Container, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React from 'react';
import useStyles from './Header-style';



function Header() {
	const { classes } = useStyles();
	return (
		<>
			<Container>
				<Center>
					<Title className={classes.h1}>
						<span className={classes.blueText}>#solveit </span>
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