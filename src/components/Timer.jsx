import React, { useEffect, useState, useRef } from 'react';
import useStyles from './Timer-style';
import timer_left from '../assets/timer-left.svg';
import timer_right from "../assets/timer-right.svg";
import arrowLeft from "../assets/arrowLeft.svg"
import arrowRight from "../assets/arrowRight.svg"
import gdscLogo from "../assets/gdsc_logo.svg"
import mapIcon from "../assets/mapicon.svg";
import { Box, Center, Container, Group, Overlay, Text, useMantineTheme } from '@mantine/core';
import { Button, useMediaQuery } from '@mui/material';
import { motion } from "framer-motion"



function Timer({ setOpend }) {
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
			<Content setOpend={setOpend} />
		</>
	);
}

export default Timer;


function useInterval(callback, delay) {
	const savedCallback = useRef();

	useEffect(() => {
		savedCallback.current = callback;
	}, [callback]);

	useEffect(() => {
		function tick() {
			savedCallback.current();
		}
		if (delay !== null) {
			let id = setInterval(tick, delay);
			return () => clearInterval(id);
		}
	}, [delay]);
}

function Content({ setOpend }) {
	const theme = useMantineTheme();
	const [days, setDays] = useState("0");
	const [hours, setHours] = useState("0");
	const [minutes, setMinutes] = useState("0");
	const [seconds, setSeconds] = useState("0");
	const [active, setActive] = useState(false);

	const countDownDate = new Date("february 16 , 2023 18:30:00").getTime();

	useInterval(() => {
		const now = new Date().getTime();

		const distance = countDownDate - now;
		setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
		setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
		setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
		setSeconds(Math.floor((distance % (1000 * 60)) / 1000));

		setActive(!active);
	}, 1000);

	return (
		<>
			<Container pb={60}>
				<Group position='center' >
					<Square number={0} color='#FBBC05' label="DAYS" />
					<Square number={0} color='#4285F4' label="HOURS" />
					<Square number={0} color='#FF0000' label="MINUTES" />
					<Square number={0} color={active ? '#D9D9D9' : "#0F9D58"} label="SECONDS" />
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
							onClick={() => setOpend(true)}
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
		<motion.div
			whileHover={{ scale: 1.2 }}
		>
			<Box className={classes.Square} sx={{ backgroundColor: props.color }}>
				{props.number < 10 ? "0" + props.number : props.number}
				<p className={classes.SmallFont}>{props.label}</p>
			</Box>
		</motion.div>
	);
}