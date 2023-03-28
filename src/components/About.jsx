import { Center, Container, Title } from '@mantine/core';
import useStyles from './About-style';

function About() {
	const { classes } = useStyles();
	return (
		<>
			<Container pt={60} id="About">
				<Center>
					<Title className={classes.h1}>
						<span className={classes.greenText}>#About </span>
						The Event
					</Title>
				</Center>

				<Center>
					<p className={classes.paragraph}>Welcome to the official website of the 'Solve It' hackathon! This dynamic event brings together the best and brightest from the tech community to collaborate and find innovative solutions to real-world problems. Whether you're a seasoned developer or just starting out, this hackathon provides a chance for you to showcase your skills, learn new technologies, and network with like-minded individuals. The 'Solve It' hackathon is designed to encourage collaboration, creativity, and problem-solving, and it's the perfect opportunity to push the boundaries of what's possible. So what are you waiting for? Join us in the quest to #SolveIt! Register now and be a part of this exciting event.
					</p>
				</Center>
			</Container>
		</>
	);
}

export default About;