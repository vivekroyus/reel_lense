"use client";
import { Container, Title, SimpleGrid, Card, Text } from "@mantine/core";

const features = [
  {
    title: "AI-Powered Scoring",
    description: "Get instant, objective feedback on your script’s structure, pacing, and dialogue.",
  },
  {
    title: "Smart Suggestions",
    description: "Receive actionable tips to improve your script’s impact and readability.",
  },
  {
    title: "Real-Time Collaboration",
    description: "Work with co-writers and editors in real time, powered by the cloud.",
  },
  {
    title: "Export Options",
    description: "Download your script in multiple formats for easy sharing and submission.",
  },
];

export default function FeaturesSection() {
  return (
    <Container py="xl">
      <Title order={2} ta="center" mb="xl">
        Features
      </Title>
      <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="xl">
        {features.map((feature) => (
          <Card key={feature.title} shadow="md" radius="md" p="lg" withBorder>
            <Title order={4} mb="xs">{feature.title}</Title>
            <Text c="dimmed">{feature.description}</Text>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}