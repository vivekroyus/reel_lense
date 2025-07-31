"use client";
import { Container, Title, Text, Button, Stack } from "@mantine/core";

export default function CtaSection() {
  return (
    <Container py="xl" size="sm">
      <Stack align="center" gap="md">
        <Title order={2} ta="center">
          Ready to transform your script?
        </Title>
        <Text ta="center" c="dimmed">
          Sign up now and start improving your screenplay with AI-powered insights.
        </Text>
        <Button size="lg" color="indigo" radius="xl">
          Get Started
        </Button>
      </Stack>
    </Container>
  );
}