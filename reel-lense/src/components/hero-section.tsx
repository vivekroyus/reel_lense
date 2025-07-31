"use client";
import { Box, Title, Text, Button, Container } from "@mantine/core";

export default function HeroSection() {
  return (
    <Box
      style={{
        minHeight: "80vh",
        background: "linear-gradient(120deg, #4f8cff 0%, #a6bfff 100%)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Title order={1} size="3rem" fw={900} c="white" mb="md">
          Write. Score. Improve. With AI.
        </Title>
        <Text size="xl" c="white" mb="lg">
          Instantly analyze and enhance your scripts with AI-powered scoring and suggestions.
        </Text>
        <Button size="lg" color="indigo" radius="xl">
          Try it now
        </Button>
      </Container>
    </Box>
  );
}