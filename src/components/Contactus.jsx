import { Center, Container, Stack, Textarea, TextInput, Title, useMantineTheme, Button } from "@mantine/core";
import useStyles from "./Contactus-style";
import { useForm } from "@mantine/form";
import axios from "axios";
import { useState } from "react";
function Contactus({ setModalContent, setModalOpened }) {
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
				<ContactForm setModalContent={setModalContent} setModalOpened={setModalOpened} />
			</Container>
		</>
	);
}

export default Contactus



function ContactForm({ setModalContent, setModalOpened }) {
	const [loading, setLoading] = useState(false)
	const theme = useMantineTheme();
	const form = useForm({
		initialValues: {
			name: "",
			address: "",
			message: ""
		},
		validate: {
			name: (value) => (value.length > 0 ? null : 'Invalid fullName'),
			address: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
			message: (value) => (value.length > 0 ? null : 'Invalid message')
		}
	})

	const submitHandeler = (e) => {
		e.preventDefault();
		const errors = form.validate();
		if (errors.hasErrors) {
			console.log("idk what to put in this if block, dont judge me")
		} else {
			setLoading(true)
			axios.post("https://mouayed01.pythonanywhere.com/api/contactform", form.values)
				.then((res) => {
					setModalContent("Your Form has been submitted successfully, we will contact you soon")
					setModalOpened(true)
					form.setFieldValue('name', "")
					form.setFieldValue('address', "")
					form.setFieldValue('message', "")
					setLoading(false)
				})
				.catch((err) => {
					setModalContent("Something went wrong, please try again later")
					setModalOpened(true)
					setLoading(false)
				})
		}
	}
	return (
		<>
			<Container size={"xs"} >
				<Stack>
					<TextInput
						placeholder="Enter your name"
						size="md"
						withAsterisk
						{...form.getInputProps('name')}
					/>
					<TextInput
						placeholder="Enter your email address"
						size="md"
						withAsterisk
						{...form.getInputProps('address')}
					/>
					<Textarea
						placeholder="Enter your message"
						size="md"
						withAsterisk
						minRows={4}
						maxRows={4}
						{...form.getInputProps('message')}
					/>
					<Button sx={{
						boxShadow: "none",
						padding: "5px 20px",
						backgroundColor: "#4285F4",
						fontSize: theme.fontSizes.sm
					}}
						variant="contained"
						onClick={submitHandeler}
						loading={loading}

					>Submit</Button>
				</Stack>
			</Container>
		</>
	);
}