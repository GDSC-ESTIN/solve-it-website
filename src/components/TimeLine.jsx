import { Center, Container, Title } from '@mantine/core';
import React from 'react';
import useStyles from './TimeLine-style';
import {
	Timeline, TimelineItem, TimelineSeparator,
	TimelineConnector, TimelineContent, TimelineDot
} from '@mui/lab';

import TimelineOppositeContent, {
	timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

function TimeLine() {
	const { classes } = useStyles();
	return (
		<>
			<Container pt={60} id="Timeline">
				<Center>
					<Title className={classes.h1}>
						<span className={classes.yellowText}>#Event </span>
						Timeline
					</Title>
				</Center>
				<Center>
					<MyComponent />
				</Center>
			</Container>
		</>
	);
}

export default TimeLine;




function MyComponent() {
	return (
		<Timeline sx={{
			[`& .${timelineOppositeContentClasses.root}`]: {
				flex: 0.6,
				[`@media (max-width: 450px)`]: {
					flex: 1,
				}
			},
		}} >
			<TimelineItem>
				<TimelineOppositeContent>
					<b style={{ color: "#0F9D58" }}>workshops<br /> and talks</b>
				</TimelineOppositeContent>
				<TimelineSeparator >
					<TimelineDot variant="outlined" />
					<TimelineConnector sx={{ backgroundColor: "#0F9D58" }} />
				</TimelineSeparator>
				<TimelineContent>
					<p><b style={{ color: "#6b6969" }}>Jan 05th : </b> Solveit anounce.</p>
					<br />
				</TimelineContent>
			</TimelineItem>


			<TimelineItem>
				<TimelineOppositeContent>
					<b style={{ color: "#4285F4" }}>learn and <br /> build</b>
				</TimelineOppositeContent>
				<TimelineSeparator >
					<TimelineDot variant="outlined" />
					<TimelineConnector sx={{ backgroundColor: "#4285F4" }} />
				</TimelineSeparator>
				<TimelineContent>
					<p><b style={{ color: "#6b6969" }}>Feb 02nd : </b> Solveit day D.</p>
					<p><b style={{ color: "#6b6969" }}>Mar 17th : </b> Submission Open.</p>
				</TimelineContent>
			</TimelineItem>

			<TimelineItem>
				<TimelineOppositeContent>
					<b style={{ color: "#FFC700" }}>Solution<br />  evaluations 1</b>
				</TimelineOppositeContent>
				<TimelineSeparator >
					<TimelineDot variant="outlined" />
					<TimelineConnector sx={{ backgroundColor: "#FFC700" }} />
				</TimelineSeparator>
				<TimelineContent>
					<p><b style={{ color: "#6b6969" }}>Mar 31th :  </b> Submissions Close.</p>
					<br />
				</TimelineContent>
			</TimelineItem>

			<TimelineItem>
				<TimelineOppositeContent>
					<b style={{ color: "#0F9D58" }}>Mentorship<br />  Phase</b>
				</TimelineOppositeContent>
				<TimelineSeparator >
					<TimelineDot variant="outlined" />
					<TimelineConnector sx={{ backgroundColor: "#0F9D58" }} />
				</TimelineSeparator>
				<TimelineContent>
					<p><b style={{ color: "#6b6969" }}>May 03rd : </b> Top 100 announced.</p>
					<br />
				</TimelineContent>
			</TimelineItem>

			<TimelineItem>
				<TimelineOppositeContent>
					<b style={{ color: "#EA4335", textAlign: "center" }}>Demo Day <br />  Preparation</b>
				</TimelineOppositeContent>
				<TimelineSeparator >
					<TimelineDot variant="outlined" />
					<TimelineConnector sx={{ backgroundColor: "#EA4335" }} />
				</TimelineSeparator>
				<TimelineContent>
					<p><b style={{ color: "#6b6969" }}>Jun 02nd : </b> Final Solution Submission.</p>
					<p><b style={{ color: "#6b6969" }}>Jul 02nd : </b> Global team winners announced.</p>
					<p><b style={{ color: "#6b6969" }}>Aug 03rd : </b> Top 3 Winners Announced.</p>
				</TimelineContent>
			</TimelineItem>

			<TimelineItem>
				<TimelineOppositeContent>
				</TimelineOppositeContent>
				<TimelineSeparator >
					<TimelineDot variant="outlined" />
				</TimelineSeparator >
				<TimelineContent>
				</TimelineContent>
			</TimelineItem>

		</Timeline>
	);
}