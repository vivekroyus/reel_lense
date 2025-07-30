"use client";
import { Container, Title, Text, Card, Image, Button, Stack, Group } from "@mantine/core";

export default function ProductPage() {
  return (
    <Container size="sm" py="xl">
      <Stack gap="xl" align="center">
        <Title order={1} ta="center" fw={900} size="2.5rem">
          Our Featured Product
        </Title>
        <Card shadow="md" radius="md" p="lg" withBorder style={{ maxWidth: 400, width: "100%" }}>
          <Image
            src="/product/product.jpg"
            alt="Product"
            radius="md"
            mb="md"
          />
          <Title order={3} mb="xs" ta="center" c="indigo">
            Ginger
          </Title>
          <Text size="md" c="dimmed" mb="md">
            The ultimate tool for filmmakers and creators. Edit, share, and collaborate on your reels with ease and speed.
          </Text>
          <Group justify="center">
            <Button color="indigo" radius="xl" size="md">
              Use Now
            </Button>
            <Button variant="outline" color="indigo" radius="xl" size="md">
              Learn More
            </Button>
          </Group>
        </Card>
      </Stack>
    </Container>
  );
}