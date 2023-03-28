import { Center, Container, Title } from '@mantine/core';
import useStyles from './Header-style';



function Header() {
	const { classes } = useStyles();
	return (
		<>
			<Container pt={60} id="Home">
				<Center>
					<Title className={classes.h1}>
						<span className={classes.blueText}>#solve-it </span>
						event is HERE!
					</Title>
				</Center>

				<Center>
					<p className={classes.paragraph}>an opportunity for individuals to showcase their skills, learn new technologies, and network with like-minded individuals. The "Solve It" hackathon provides a unique chance for individuals to come together, collaborate and create innovative solutions to real-world problems.
					</p>
				</Center>

				<Center>
					<b style={{ textAlign: "center" }}>
						The event starts in
					</b>
				</Center>
			</Container>
		</>
	);
}

export default Header;