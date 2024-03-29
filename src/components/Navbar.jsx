import { useEffect, useState } from "react";
import {
	Header,
	Container,
	Group,
	Burger,
	Paper,
	Transition,
	Center,
	useMantineTheme
} from "@mantine/core";
import Button from "@mui/material/Button";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import logo from "../assets/logo.svg";
import useStyles from "./Navbar-style";

const HEADER_HEIGHT = 60;

const links = [
	{ link: "Home", label: "Home" },
	{ link: "About", label: "About" },
	{ link: "Timeline", label: "Timeline" },
	// { link: "Workshops", label: "Workshops" },
	{ link: "Sponsors", label: "Workshops" }
];

export default function NavBar({ setOpend }) {
	const theme = useMantineTheme();
	const isMobile = useMediaQuery("(max-width: 768px)");
	const [opened, { toggle, close }] = useDisclosure(false);
	const [active, setActive] = useState("Home");
	const { classes, cx } = useStyles();

	const items = links.map((link) => (
		<a
			key={link.label}
			href={link.link}
			className={cx(classes.link, {
				[classes.linkActive]: active === link.link
			})}
			onClick={(event) => {
				event.preventDefault();
				setActive(link.link);
				scrollToElement(link.link);
				close();
			}}
		>
			{link.label}
		</a>
	));

	const elements = links.map((link) => link.link);

	const scrollToElement = id => {
		const element = document.getElementById(id);
		if (element) {
			window.scrollTo({
				top: element.offsetTop,
				behavior: 'smooth'
			});
		}
	};

	useEffect(() => {
		const handleScroll = () => {
			elements.forEach(id => {
				const element = document.getElementById(id);
				if (element && window.scrollY >= element.offsetTop - 200 && window.scrollY < element.offsetTop + element.offsetHeight) {
					setActive(id);
				}
			});
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [active, elements]);

	return (
		<Header
			sx={{ borderBottom: opened && isMobile && "3px solid #4285F4" }}
			height={HEADER_HEIGHT}
			className={classes.root}
		>
			<Container className={classes.header}>
				<img height={isMobile ? 40 : 50} src={logo} alt={"logo"} />
				<Group spacing={5} className={classes.links}>
					{items}
					<Button
						size="small"
						sx={{
							boxShadow: "none",
							padding: "2px 20px",
							backgroundColor: "#4285F4",
							fontSize: theme.fontSizes.sm
						}}
						variant="contained"
						onClick={() => setOpend(true)}
					>
						Register
					</Button>
				</Group>

				<Burger
					opened={opened}
					onClick={toggle}
					className={classes.burger}
					size="md"
					color="#4285F4"
				/>

				<Transition transition="scale-y" duration={400} mounted={opened}>
					{(styles) => (
						<Paper className={classes.dropdown} withBorder style={styles}>
							{items}
							<Center>
								<Button
									size="large"
									sx={{
										backgroundColor: "#4285F4",
										paddingLeft: "30px",
										paddingRight: "30px"
									}}
									variant="contained"
									onClick={() => setOpend(true)}
								>
									Register
								</Button>
							</Center>
						</Paper>
					)}
				</Transition>
			</Container>
		</Header>
	);
}
