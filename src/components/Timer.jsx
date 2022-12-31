import React from 'react';
import useStyles from './Timer-style';
import timer_left from '../assets/timer-left.svg';
import timer_right from "../assets/timer-right.svg";
import arrowLeft from "../assets/arrowLeft.svg"
import arrowRight from "../assets/arrowRight.svg"
import gdscLogo from "../assets/gdsc_logo.svg"
import mapIcon from "../assets/mapicon.svg";
import { Box, Center, Container, Group, Overlay, useMantineTheme } from '@mantine/core';
import { Button, useMediaQuery } from '@mui/material';



function Timer() {
	const { classes } = useStyles();
	const isMobile = useMediaQuery('(max-width:768px)');
	return (
		<>
			<Box mb={"xl"} sx={{ position: 'relative' }}>
				<Overlay style={{ height: "0" }} opacity={1} zIndex={1} >
					<img className={classes.imgLeft} src={isMobile ? timer_left : timer_left} alt='nn' />
					<img className={classes.imgRight} src={isMobile ? timer_right : timer_right} alt='nn' />
				</Overlay>
			</Box>
			<Content />
		</>
	);
}

export default Timer;


function Content() {
	const theme = useMantineTheme();
	return (
		<>
			<Container pb={60}>
				<Group position='center' >
					<Square number={14} color='#FBBC05' label="DAYS" />
					<Square number={2} color='#4285F4' label="HOURS" />
					<Square number={1} color='#FF0000' label="MINUTES" />
					<Square number={3} color='#D9D9D9' label="SECONDS" />
				</Group>
				<Center mb={"lg"}>
					<Group spacing={"xs"} position='left' mt={"xl"}>
						<img alt="mapicon" src={mapIcon} />
						<b>ESTIN,Amizosur,Bejaia</b>
					</Group>
				</Center>
				<Center mb={"lg"}>
					<Group position="center" spacing="xl">
						<img alt="left-arrow" src={arrowLeft} />
						<Button sx={{
							boxShadow: "none",
							padding: "5px 20px",
							backgroundColor: "#4285F4",
							fontSize: theme.fontSizes.sm
						}}
							disabled
							variant="contained"

						>Register Now!</Button>
						<img alt="right-arrow" src={arrowRight} />
					</Group>
				</Center>
				<Center>
					<img height="50%" alt="gdsc-logo" src={gdscLogo} />
				</Center>
			</Container>
		</>
	);
}


function Square(props) {
	const { classes } = useStyles();
	return (
		<Box className={classes.Square} sx={{ backgroundColor: props.color }}>
			{props.number < 10 ? "0" + props.number : props.number}
			<p className={classes.SmallFont}>{props.label}</p>
		</Box>
	);
}