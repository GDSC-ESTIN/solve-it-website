import { Textarea, TextInput, Button } from "@mantine/core";
import ShadowedCard from "./ShadowedCard";
import { useForm } from '@mantine/form';
import { useState } from "react";
import axios from "axios";


export default function SolveitForm({ setModalContent, setModalOpened, setOpened }) {
    const [loading, setLoading] = useState(false);
    const form = useForm({
        initialValues: {
            fullName: '',
            email: '',
            university: '',
            skills: '',
            portfolioLinks: '',
            knowledgeAboutGoogleTechnologies: '',
            wichGoogleTechWouldYouUse: '',
            teamName: '',
            teamMembers: '',
            roleInTeam: '',
            motivation: '',
            anythingToAdd: '',
        },
        validate: {
            fullName: (value) => (value.length > 0 ? null : 'you should fill this field'),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'invalid email'),
            university: (value) => (value.length > 0 ? null : 'you should fill this field'),
            skills: (value) => (value.length > 0 ? null : 'you should fill this field'),
            portfolioLinks: (value) => (value.length > 0 ? null : 'you should fill this field'),
            knowledgeAboutGoogleTechnologies: (value) => (value.length > 0 ? null : 'you should fill this field'),
            wichGoogleTechWouldYouUse: (value) => (value.length > 0 ? null : 'you should fill this field'),
            teamName: (value) => (value.length > 0 ? null : 'you should fill this field'),
            teamMembers: (value) => (value.length > 0 ? null : 'you should fill this field (if you are alone, write alone)'),
            roleInTeam: (value) => (value.length > 0 ? null : 'you should fill this field'),
            motivation: (value) => (value.length > 0 ? null : 'you should fill this field'),
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        const errors = form.validate();
        if (errors.hasErrors) {
            const mydiv = document.getElementsByClassName("scroll-to-this-div");
            mydiv[0].scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
            setLoading(true)
            axios.post("https://mouayed01.pythonanywhere.com/api/solveitform", form.values)
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


    return (
        <>
            <div className="scroll-to-this-div"></div>
            <ShadowedCard>
                <TextInput pb={"lg"} mx={"lg"}
                    placeholder="EX : KEZIZ Mouayed"
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
                    placeholder="EX : gdsc@estin.dz"
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
                <Textarea pb={"lg"} mx={"lg"}
                    minRows={4}
                    placeholder="EX : react, nextjs, django, flutter..."
                    label="Your Skills"
                    description="The selection process will be based on your skills"
                    variant="filled"
                    radius="md"
                    size="md"
                    withAsterisk
                    {...form.getInputProps('skills')}
                />
            </ShadowedCard>

            <ShadowedCard>
                <Textarea pb={"lg"} mx={"lg"}
                    minRows={4}
                    placeholder="EX : website, github, behance"
                    label="Your Portfolios links"
                    description="The selection process will be based on your portfolio"
                    variant="filled"
                    radius="md"
                    size="md"
                    withAsterisk
                    {...form.getInputProps('portfolioLinks')}
                />
            </ShadowedCard>

            <ShadowedCard>
                <Textarea pb={"lg"} mx={"lg"}
                    minRows={4}
                    placeholder="EX : flutter, firebase, tensorflow..."
                    label="Your knowledge about google technologies"
                    description="Your Project should ba base on at least one of google technologies"
                    variant="filled"
                    radius="md"
                    size="md"
                    withAsterisk
                    {...form.getInputProps('knowledgeAboutGoogleTechnologies')}
                />
            </ShadowedCard>

            <ShadowedCard>
                <Textarea pb={"lg"} mx={"lg"}
                    minRows={4}
                    label="Which one would you use"
                    variant="filled"
                    radius="md"
                    size="md"
                    withAsterisk
                    {...form.getInputProps('wichGoogleTechWouldYouUse')}
                />
            </ShadowedCard>


            <ShadowedCard>
                <TextInput pb={"lg"} mx={"lg"}
                    label="Team name"
                    variant="filled"
                    radius="md"
                    size="md"
                    withAsterisk
                    {...form.getInputProps('teamName')}
                />
            </ShadowedCard>

            <ShadowedCard>
                <Textarea pb={"lg"} mx={"lg"}
                    minRows={4}
                    label="Team members"
                    placeholder="EX : Member1, Member2, Member3 ..."
                    variant="filled"
                    radius="md"
                    size="md"
                    withAsterisk
                    {...form.getInputProps('teamMembers')}
                />
            </ShadowedCard>

            <ShadowedCard>
                <TextInput pb={"lg"} mx={"lg"}
                    label="Your role in the team"
                    description="EX : Team Leader, Frontend Developer, Backend Developer, Designer, Project Manager, ..."
                    variant="filled"
                    radius="md"
                    size="md"
                    withAsterisk
                    {...form.getInputProps('roleInTeam')}
                />
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