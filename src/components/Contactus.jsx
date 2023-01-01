import { Center, Container, Stack, Title, useMantineTheme } from "@mantine/core";
import useStyles from "./Contactus-style";
import { Button, TextField } from "@mui/material";

function Contactus() {
	const { classes } = useStyles();
	return (
		<>
			<Container py={60}>
				<Center>
					<Title className={classes.h1}>
						<span className={classes.blueText}>#Contact </span>
						us
					</Title>
				</Center>

				<Center>
					<p className={classes.paragraph}>
						We are here for you! how can we help you ?
					</p>
				</Center>
				<ContactForm />
			</Container>
		</>
	);
}

export default Contactus



function ContactForm() {
	const theme = useMantineTheme();
	return (
		<>
			<Container size={"xs"} >
				<Stack>
					<TextField sx={{ backgroundColor: "white" }}
						// error helperText="please enter your name"
						id="outlined-basic"
						label="Enter your name "
						variant="outlined"
					/>
					<TextField sx={{ backgroundColor: "white" }}
						// error helperText="please enter your mail adress"
						id="outlined-basic"
						label="Enter your mail adresse" variant="outlined"
					/>
					<TextField sx={{ backgroundColor: "white" }}
						// error helperText="please enter your message"
						id="outlined-multiline-static"
						label="Enter your message"
						multiline
						rows={4}
					/>
					<Button sx={{
						boxShadow: "none",
						padding: "5px 20px",
						backgroundColor: "#4285F4",
						fontSize: theme.fontSizes.sm
					}}
						variant="contained"

					>Submit</Button>
				</Stack>
			</Container>
		</>
	);
}