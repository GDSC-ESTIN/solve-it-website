import { Box } from "@mantine/core"

export default function ShadowedCard({ children }) {
    return (
        <Box mb={"xl"} pt={"xl"} sx={{
            borderRadius: "5px",
            boxShadow: "0px 0px 13px -1px rgba(0,0,0,0.15)",
            WebkitBoxShadow: "0px 0px 13px -1px rgba(0,0,0,0.15)",
            MozBoxShadow: "0px 0px 13px -1px rgba(0,0,0,0.15)",
        }}>
            {children}
        </Box>
    );
}