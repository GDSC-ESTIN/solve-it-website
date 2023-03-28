import { Box, NativeSelect, Button, Textarea, TextInput, Select } from "@mantine/core";
import ShadowedCard from "./ShadowedCard";
import DndList from "./DndList";
import { useListState, useMediaQuery } from "@mantine/hooks";
import { useForm } from '@mantine/form';
import { useEffect, useState } from "react";
import axios from "axios";

const data = ["Web dev with Angular", "TensorFlow", "Mobile App dev with Kotlin"]
const colors = ["#4285F4", "#0F9D58", "#FF0000"]

export default function WorkshopForm({ setModalContent, setModalOpened, setOpened }) {
    const isTablet = useMediaQuery("(max-width: 800px)");

    const [state, handlers] = useListState(data);
    const [loading, setLoading] = useState(false);
    const form = useForm({
        initialValues: {
            fullName: '',
            email: '',
            university: '',
            departementInGDSC: '',
            workshops: '',
            motivation: '',
            anythingToAdd: '',
        },
        validate: {
            fullName: (value) => (value.length > 0 ? null : 'you should fill this field'),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'invalid email'),
            university: (value) => (value.length > 0 ? null : 'you should fill this field'),
            departementInGDSC: (value) => (value.length > 0 ? null : 'you should select a departement'),
            workshops: (value) => (value.length > 0 ? null : 'invalid workshops'),
            motivation: (value) => (value.length > 0 ? null : 'you should fill this field'),
        },
    });

    //when state changes, set the workshops field value



    const handleSubmit = (e) => {
        e.preventDefault()
        const errors = form.validate();
        if (errors.hasErrors) {
            const mydiv = document.getElementsByClassName("scroll-to-this-div");
            mydiv[0].scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
            setLoading(true)
            axios.post("https://mouayed01.pythonanywhere.com/api/workshopform", form.values)
                .then((res) => {
                    setModalContent("Your form has been submitted successfully")
                    setModalOpened(true)
                    setOpened(false)
                    setLoading(false)
                })
                .catch((err) => {
                    setModalContent("You have already submitted your form with this email")
                    setModalOpened(true)
                    setOpened(false)
                })
        }
    }

    useEffect(() => {
        form.setFieldValue('workshops', state.map((item, index) => `${index + 1}-${item}`).join(', '))
    }, [state])

    return (
        <>
            <div className="scroll-to-this-div"></div>
            <ShadowedCard>
                <TextInput pb={"lg"} mx={"lg"}
                    placeholder="Ex : KEZIZ Mouayed"
                    label="Your full name"
                    variant="filled"
                    radius="md"
                    size="md"
                    withAsterisk
                    {...form.getInputProps('fullName')}
                />
            </ShadowedCard>

            <ShadowedCard>
                <TextInput pb={"lg"} mx={"lg"}
                    placeholder="Ex : gdsc@estin.dz"
                    label="Your Email"
                    variant="filled"
                    radius="md"
                    size="md"
                    withAsterisk
                    {...form.getInputProps('email')}
                />
            </ShadowedCard>

            <ShadowedCard>
                <TextInput pb={"lg"} mx={"lg"}
                    placeholder="EX : ESTIN"
                    label="Your University"
                    variant="filled"
                    radius="md"
                    size="md"
                    withAsterisk
                    {...form.getInputProps('university')}
                />
            </ShadowedCard>

            <ShadowedCard>
                <Select pb={"lg"} mx={"lg"}
                    placeholder="SELECT ONE"
                    data={['DEV', 'UI/UX', 'MULTIMEDIA', 'DESIGN', "RELEX", "LOGISTICS", "COMMUNICATION", "CYBERSECURITY", "NOTHING"]}
                    label="Your Departement in gdsc"
                    variant="filled"
                    radius="md"
                    size="md"
                    withAsterisk
                    {...form.getInputProps('departementInGDSC')}
                />
            </ShadowedCard>

            <ShadowedCard>
                <Box mx={"lg"} mb={"md"}>
                    <div style={{ fontSize: "16px", fontWeight: "500" }}>{"Which workshop you want to attend ? (drag and drop)"}</div>
                    {isTablet && <div style={{ fontSize: "16px", fontWeight: "500" }}>{"for mobile devices : (hold then drag and drop)"}</div>}
                </Box>
                <DndList state={state} handlers={handlers} colors={colors} />
            </ShadowedCard>

            <ShadowedCard>
                <Textarea pb={"lg"} mx={"lg"}
                    minRows={4}
                    label="Your Motivation"
                    description="Why do you want to participate in this hackathon ?"
                    variant="filled"
                    radius="md"
                    size="md"
                    withAsterisk
                    {...form.getInputProps('motivation')}
                />
            </ShadowedCard>

            <ShadowedCard>
                <Textarea pb={"lg"} mx={"lg"}
                    minRows={4}
                    label="Anything to add"
                    description="Any other information you want to add, or any question you want to ask"
                    variant="filled"
                    radius="md"
                    size="md"
                    {...form.getInputProps('anythingToAdd')}
                />
            </ShadowedCard>
            <Button
                sx={{
                    width: "100%",
                    boxShadow: "none",
                    backgroundColor: "#4285F4",
                }}

                onClick={handleSubmit}
                loading={loading}
            >
                Submit
            </Button>
        </>
    );
}