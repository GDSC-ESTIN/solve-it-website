import { Carousel } from '@mantine/carousel';
import { AspectRatio, Card, Center, Container, Grid, Image, Title } from '@mantine/core';
import useStyles from './Mentors-style';
import { useMediaQuery } from '@mantine/hooks';
import mentorPhoto from "../assets/mentor.png";

function Mentors() {
	const { classes } = useStyles();
	const isMobile = useMediaQuery('(max-width: 576px)');
	return (
		<>
			<Container pt={60}>
				<Center>
					<Title className={classes.h1}>
						<span className={classes.blueText}>#Event </span>
						Mentors
					</Title>
				</Center>
				{isMobile ? (<MentorsCarousel />) : (<MentorsGrid />)}

			</Container>
		</>
	);
}

export default Mentors;



function MentorCard({ bg }) {
	return (
		<Card radius={"xs"} shadow={"lg"} p={"xl"}>
			<AspectRatio mb="md" ratio={1 / 1} sx={{ width: "100%", backgroundColor: bg }} mx="auto">
				<Image
					width="100%"
					height="100%"
					src={mentorPhoto}
					alt="Panda"
				/>
			</AspectRatio>
			<h3>Mohamed Labaz</h3>
			<p>
				1CS Student<br />
				Ui/ux manger at gdsc<br />
				graphic designer
			</p>
		</Card>

	);
}


function MentorsGrid() {
	return (
		<Grid>
			<Grid.Col span={6} sm={4} >
				<MentorCard bg="#4285F4" />
			</Grid.Col>
			<Grid.Col span={6} sm={4}>
				<MentorCard bg="#FBBC05" />
			</Grid.Col>
			<Grid.Col span={6} sm={4} offsetSm={0} offset={3}  >
				<MentorCard bg="#0F9D58" />
			</Grid.Col>
		</Grid>
	);
}


function MentorsCarousel() {
	return (
		<Carousel
			slideSize={"75%"}
			loop={true}
			withControls={false}
			draggable={true}
			slidesToScroll={1}
		>
			<Carousel.Slide ><MentorCard bg="#4285F4" /></Carousel.Slide>
			<Carousel.Slide ><MentorCard bg="#FBBC05" /></Carousel.Slide>
			<Carousel.Slide ><MentorCard bg="#0F9D58" /></Carousel.Slide>
		</Carousel>
	);
}