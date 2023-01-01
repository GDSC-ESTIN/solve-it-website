import { Box, Center, Container, Group } from "@mantine/core";
import logo from "../assets/full_logo.svg"
import instagramIcon from "../assets/IconInstagram.svg"
import facebookIcon from "../assets/IconFacebook.svg"
import linkedInIcon from "../assets/IconLinkedin.svg"

export default function Footer() {
	return (
		<Box py="xl" sx={{ backgroundColor: "#0F9D58" }}>
			<Center><b style={{ color: "white", marginBottom: "10px" }}>All rights reserved to</b></Center>
			<Container size="xs">
				<img src={logo} alt="full-logo" width="100%" />
			</Container>
			<Center my="md">
				<Group position="center">
					<a href="https://www.linkedin.com/company/gdsc-estin/" target={"_blank"}><img src={linkedInIcon} alt="linkedin-icon" width="35px" /></a>
					<a href="https://www.facebook.com/gdscestin" target={"_blank"}><img src={facebookIcon} alt="facebook-icon" width="35px" /></a>
					<a href="https://www.instagram.com/gdsc_estin/" target={"_blank"}><img src={instagramIcon} alt="instagram-icon" width="35px" /></a>
				</Group>
			</Center>
		</Box>
	);
}