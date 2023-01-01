import { AspectRatio, Box, Button, Card, Center, Container, Grid, Image, Overlay, Title } from '@mantine/core';
import React from 'react';
import useStyles from './Workshops-style';
import mentorPhoto from "../assets/mentor.png";

function Workshops() {
	const { classes } = useStyles();
	return (
		<>
			<Container pt={60}>
				<Center>
					<Title className={classes.h1}>
						<span className={classes.redText}>#Event </span>
						Workshops
					</Title>
				</Center>

				<Grid>
					<Grid.Col span={12} sm={6}>
						<WorkshopCard color="#4285F4" />
					</Grid.Col>
					<Grid.Col span={12} sm={6}>
						<WorkshopCard color="#FBBC05" />
					</Grid.Col>
					<Grid.Col span={12} sm={6}>
						<WorkshopCard color="#0F9D58" />
					</Grid.Col>
					<Grid.Col span={12} sm={6}>
						<WorkshopCard color="#FF0000" />
					</Grid.Col>
				</Grid>

			</Container>
		</>
	);
}
export default Workshops;



function WorkshopCard({ color }) {
	return (
		<>
			<Card mx={"lg"} radius={"xs"} shadow={"lg"} p={0} >
				<Grid>
					<Grid.Col span={5}>
						<img
							style={{ objectFit: "cover", backgroundColor: "#E8E8E8" }}
							height={"100%"}
							width="100%"
							src={mentorPhoto}
							alt="Panda"
						/>
					</Grid.Col>
					<Grid.Col span={7} py="sm" sx={{ scale: "0.8" }}>
						<Box my={"xl"} sx={{ position: 'relative' }}>
							<Overlay style={{ height: "0" }} opacity={1} zIndex={0} >
								<Box sx={{
									width: 0,
									height: 0,
									borderBottom: `50px solid ${color}`,
									borderRight: "50px solid transparent",
								}}></Box>
							</Overlay>
							<h2 style={{ position: "relative", zIndex: 2 }}>MOTION GRAPHICS</h2>
						</Box>
						<h3 style={{ fontWeight: "600" }}>Trainer : </h3>
						<h3>Mohamed Labaz</h3>
						<p>
							1CS Student<br />
							Ui/ux manger at gdsc<br />
							graphic designer
						</p>
					</Grid.Col>
				</Grid>
			</Card>
		</>
	);
}