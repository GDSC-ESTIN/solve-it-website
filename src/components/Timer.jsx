import React from 'react';
import useStyles from './Timer-style';
import timer_left from '../assets/timer-left.svg';
import timer_right from "../assets/timer-right.svg";
import mapIcon from "../assets/mapicon.svg";
import { Box, Center, Group, Overlay, Text } from '@mantine/core';


function Timer() {
	const { classes } = useStyles();
	return (
		<>
			{/* two images one in the beggining of the screen (left), the other in the end (right) */}
			<Box mb={"xl"} sx={{ position: 'relative' }}>
				<Overlay style={{ height: "0" }} opacity={1} zIndex={-1} >
					<img className={classes.imgLeft} src={timer_left} alt='nn' />
					<img className={classes.imgRight} src={timer_right} alt='nn' />
				</Overlay>
			</Box>
			<Content />
		</>
	);
}

export default Timer;






function Content() {
	return (
		<>
			<Group position='center' >
				<Square number={14} color='#FBBC05' label="DAYS" />
				<Square number={2} color='#4285F4' label="HOURS" />
				<Square number={1} color='#FF0000' label="MINUTES" />
				<Square number={3} color='#D9D9D9' label="SECONDS" />
			</Group>
			<Center>
				<Group spacing={"xs"} position='left' mt={"xl"}>
					<img alt="mapicon" src={mapIcon} />
					<b>ESTIN,Amizour,Bejaia</b>
				</Group>
			</Center>
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