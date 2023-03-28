import { Box, Button, Card, Center, Container, Drawer, ScrollArea, SegmentedControl, Text, Title, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";
import useStyles from "./RegistrationDrawer-styles";
import ShadowedCard from "./ShadowedCard";
import SolveitForm from "./SolveitForm";
import WorkshopForm from "./WorkshopForm";


export default function RegistrationDrawer({ opened, setOpened, setModalContent, setModalOpened }) {
    const { classes } = useStyles();
    const [value, setValue] = useState('solveit');
    const isTablet = useMediaQuery("(max-width: 800px)");
    return (
        <>
            <Drawer
                position="top"
                opened={opened}
                onClose={() => setOpened(false)}
                padding="xl"
                size="full"
            >
                <ScrollArea h={isTablet ? "calc(100vh - 70px - 2rem)" : "calc(100vh - 70px)"} w="100%">
                    <Container>
                        <Center>
                            <Title className={classes.h1}>
                                <span className={classes.redText}>#Event </span>
                                Workshops
                            </Title>
                        </Center>
                        <ShadowedCard>
                            <Text fz="lg" fw={700} mx={"lg"} mb={"xl"}>In which one you want participate ?</Text>
                            <SegmentedControl
                                m={0} p={0}
                                fullWidth
                                color="blue"
                                value={value}
                                radius={0}
                                onChange={setValue}
                                data={[
                                    { label: <Text my={"sm"}>SolveiT</Text>, value: 'solveit' },
                                    { label: <Text my={"sm"}>WORKSHOPS</Text>, value: 'workshops' },
                                ]}
                            />
                        </ShadowedCard>
                        {value === 'solveit' ? (
                            <SolveitForm setOpened={setOpened} setModalOpened={setModalOpened} setModalContent={setModalContent} />
                        ) : (
                            <WorkshopForm setOpened={setOpened} setModalOpened={setModalOpened} setModalContent={setModalContent} />
                        )}
                    </Container>
                </ScrollArea>
            </Drawer>
        </>
    );
}