"use client";
import {
  Container,
  Title,
  Text,
  Button,
  Group,
  Stack,
  Paper,
  Image,
  Card,
  SimpleGrid,
  Anchor,
  Box,
  Divider,
} from "@mantine/core";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Product", href: "#product" },
  { label: "About", href: "#about" },
];

const cards = [
  {
    title: "Fast Performance",
    description: "Experience blazing fast load times and smooth interactions with our platform.",
  },
  {
    title: "Modern UI",
    description: "Enjoy a sleek, modern interface powered by Mantine and Next.js.",
  },
  {
    title: "Easy Sharing",
    description: "Share your reels effortlessly with friends and followers.",
  },
];

export default function Home() {
  const [active, setActive] = useState("Home");

  return (
    <>
      {/* Navigation Bar */}
      <Box component="nav" px="md" py="sm" style={{ borderBottom: "1px solid #eee" }}>
        <Group justify="space-between">
          <Title order={3} size="1.5rem" fw={900} c="indigo">
            Reel Lense
          </Title>
          <Group gap="lg">
            {navLinks.map((link) => (
              <Anchor
                key={link.label}
                href={link.href}
                size="md"
                c={active === link.label ? "indigo" : "dark"}
                fw={active === link.label ? 700 : 500}
                underline="never"
                onClick={() => setActive(link.label)}
                style={{ cursor: "pointer" }}
              >
                {link.label}
              </Anchor>
            ))}
          </Group>
        </Group>
      </Box>

      {/* Hero Section */}
      <Container size="md" py="xl">
        <Stack gap="xl" align="center">
          <Image
            src="/next.svg"
            alt="Hero"
            w={180}
            h={48}
            mb="md"
            radius="md"
            style={{ background: "#f3f3ff" }}
          />
          <Title order={1} ta="center" fw={900} size="2.5rem">
            Welcome to Reel Lense
          </Title>
          <Text ta="center" size="lg" c="dimmed" maw={500}>
            Discover, create, and share stunning reels with the power of Next.js and Mantine.<br />
            Build your next project with a modern UI and blazing fast performance.
          </Text>
          <Button size="lg" radius="xl" color="indigo" mt="md">
            Try it out
          </Button>
        </Stack>
      </Container>

      {/* Detail Cards Section */}
      <Container size="md" py="xl">
        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="xl">
          {cards.map((card) => (
            <Card key={card.title} shadow="md" radius="md" p="lg" withBorder>
              <Title order={3} size="1.2rem" mb="xs" c="indigo">
                {card.title}
              </Title>
              <Text size="md" c="dimmed">
                {card.description}
              </Text>
            </Card>
          ))}
        </SimpleGrid>
      </Container>

      {/* Footer */}
      <Divider my="xl" />
      <Box
        component="footer"
        px="md"
        py="md"
        style={{
          background: "#f8f9fa",
          minHeight: 60,
        }}
      >
        <Group justify="space-between" h="100%">
          <Text size="sm" c="dimmed">
            © {new Date().getFullYear()} Reel Lense. All rights reserved.
          </Text>
          <Group gap="md">
            <Anchor href="#" size="sm" c="indigo">
              Home
            </Anchor>
            <Anchor href="#product" size="sm" c="indigo">
              Product
            </Anchor>
            <Anchor href="#about" size="sm" c="indigo">
              About
            </Anchor>
          </Group>
        </Group>
      </Box>
    </>
  );
}