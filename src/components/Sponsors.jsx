import { AspectRatio, Box, Center, Container, Grid, Image, Title } from '@mantine/core';
import useStyles from './Sponsors-styles';
import { useMediaQuery } from '@mantine/hooks';
import { Carousel } from '@mantine/carousel';
import sponsor1 from "../assets/sponsor1.svg";
import sponsor2 from "../assets/sponsor2.svg";
import sponsor3 from "../assets/sponsor3.svg";

function Sponsors() {
	const { classes } = useStyles();
	const isMobile = useMediaQuery('(max-width: 576px)');
	return (
		<>
			<Container pt={60} id="Sponsors">
				<Center>
					<Title className={classes.h1}>
						<span className={classes.yellowText}>#Event </span>
						Sponsors
					</Title>
				</Center>
				{isMobile ? (<MentorsCarousel />) : (<MentorsGrid />)}
			</Container>
		</>
	);
}

export default Sponsors;






function MentorCard({ source, color }) {
	const { classes } = useStyles();
	return (
		<>
			<Center m="xl">
				<Box p={50} className={classes.circle}
					sx={{
						boxShadow: `0px 0px 25px ${color}`,
					}}
				>
					<AspectRatio ratio={1 / 1} sx={{ width: "100%" }} mx="auto">
						<Image
							src={source}
							alt="Panda"
							style={{ objectFit: "scale-down" }}
						/>
					</AspectRatio>
				</Box>
			</Center>
		</>
	);
}


function MentorsGrid() {
	return (
		<Grid>
			<Grid.Col span={6} sm={4} >
				<MentorCard source={sponsor1} color="#4385F44D" />
			</Grid.Col>
			<Grid.Col span={6} sm={4}>
				<MentorCard source={sponsor2} color="#0F9D584D" />
			</Grid.Col>
			<Grid.Col span={6} sm={4} offsetSm={0} offset={3}  >
				<MentorCard source={sponsor3} color={"#AA00004D"} />
			</Grid.Col>
		</Grid>
	);
}







function MentorsCarousel() {
	return (
		<Carousel
			py={"xl"}
			slideSize={"50%"}
			loop={true}
			withControls={false}
			draggable={true}
			slidesToScroll={1}
		>
			<Carousel.Slide ><MentorCard source={sponsor1} color="#4385F44D" /></Carousel.Slide>
			<Carousel.Slide ><MentorCard source={sponsor2} color="#0F9D584D" /></Carousel.Slide>
			<Carousel.Slide ><MentorCard source={sponsor3} color="#AA00004D" /></Carousel.Slide>
		</Carousel>
	);
}

