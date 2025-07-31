"use client";
import { Box, Group, Text, Anchor } from "@mantine/core";

export default function FooterSection() {
  return (
    <Box
      component="footer"
      px="md"
      py="md"
      style={{
        background: "#f8f9fa",
        minHeight: 60,
        marginTop: 40,
      }}
    >
      <Group justify="space-between" h="100%">
        <Text size="sm" c="dimmed">
          © {new Date().getFullYear()} Reel Lense. All rights reserved.
        </Text>
        <Group gap="md">
          <Anchor href="/" size="sm" c="indigo">
            Home
          </Anchor>
          <Anchor href="/product" size="sm" c="indigo">
            Product
          </Anchor>
        </Group>
      </Group>
    </Box>
  );
}