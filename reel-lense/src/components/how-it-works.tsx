"use client";
import { Container, Title, SimpleGrid, Card, Text } from "@mantine/core";

const steps = [
  {
    title: "Upload Your Script",
    description: "Easily upload your screenplay or script in PDF or text format.",
  },
  {
    title: "AI Scores & Suggests",
    description: "Our AI analyzes your script, scores it, and provides actionable suggestions.",
  },
  {
    title: "Download & Improve",
    description: "Download your improved script or iterate further with instant feedback.",
  },
];

export default function HowItWorks() {
  return (
    <Container py="xl">
      <Title order={2} ta="center" mb="xl">
        How It Works
      </Title>
      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="xl">
        {steps.map((step) => (
          <Card key={step.title} shadow="md" radius="md" p="lg" withBorder>
            <Title order={4} mb="xs">{step.title}</Title>
            <Text c="dimmed">{step.description}</Text>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}