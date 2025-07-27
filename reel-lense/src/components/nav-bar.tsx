"use client";
import {
    Title,
    Box,
    Group,
    Anchor
} from "@mantine/core";
import { usePathname } from "next/navigation";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Product", href: "/product" },
    { label: "About", href: "/about" },
];

export default function NavBar() {
    const pathname = usePathname();

    return (
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
                    c={pathname === link.href ? "indigo" : "dark"}
                    fw={pathname === link.href ? 700 : 500}
                    underline="never"
                    style={{ cursor: "pointer" }}
                >
                    {link.label}
                </Anchor>
                ))}
            </Group>
            </Group>
        </Box>
    )
}