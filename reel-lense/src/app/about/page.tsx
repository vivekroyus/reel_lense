"use client";
import {
  Container,
  Title,
  Text,
  Button,
  Group,
  Card,
  Box,
  Avatar,
  Anchor,
  Stack,
} from "@mantine/core";

const team = [
  {
    name: "Alex Director",
    image: "/about.jpg", // Place image in public/alex.jpg
    description: "Filmmaker & creative lead. Passionate about storytelling and visual arts.",
    socials: [
      { label: "LinkedIn", url: "https://linkedin.com" },
      { label: "Github", url: "https://github.com" },
    ],
  },
  {
    name: "Jamie Editor",
    image: "/about.jpg", // Place image in public/jamie.jpg
    description: "Editor & tech enthusiast. Loves crafting seamless video experiences.",
    socials: [
      { label: "LinkedIn", url: "https://linkedin.com/" },
      { label: "GitHub", url: "https://github.com/" },
    ],
  },
];

export default function AboutPage() {
  return (
    <Container size="md" py="xl">
      <Stack gap="xl" align="center">
        <Title order={1} ta="center" fw={900} size="2.5rem">
          About Reel Lense
        </Title>
        <Text ta="center" size="lg" c="dimmed" maw={500}>
          Meet the team behind Reel Lense. We're passionate about filmmaking, technology, and helping creators share their stories.
        </Text>
        <Button size="lg" radius="xl" color="indigo" component="a" href="mailto:contact@reellense.com">
          Contact Us
        </Button>
        <Group justify="center" mt="xl">
          {team.map((member) => (
            <Card key={member.name} shadow="md" radius="md" p="lg" withBorder style={{ width: 260, alignItems: "center", display: "flex", flexDirection: "column" }}>
              <Avatar src={member.image} alt={member.name} size={90} radius={90} mb="md" />
              <Title order={4} mb="xs" ta="center">{member.name}</Title>
              <Text size="sm" c="dimmed" ta="center" mb="sm">{member.description}</Text>
              <Group gap="xs" justify="center">
                {member.socials.map((social) => (
                  <Anchor key={social.label} href={social.url} target="_blank" c="indigo" size="sm">
                    {social.label}
                  </Anchor>
                ))}
              </Group>
            </Card>
          ))}
        </Group>
      </Stack>
    </Container>
  );
}