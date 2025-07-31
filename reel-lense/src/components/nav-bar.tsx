"use client";
import { useEffect, useState } from "react";
import { Box, Group, Anchor, Title } from "@mantine/core";
import { usePathname } from "next/navigation";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Product", href: "/product" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

      return (
    <Box
      component="nav"
      px="md"
      py="sm"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 100,
        background: scrolled ? "rgba(255,255,255,0.1)" : "transparent", // more transparent
        boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.04)" : "none",
        transition: "background 0.3s, box-shadow 0.3s",
        backdropFilter: scrolled ? "blur(12px)" : "none", // stronger blur
        }}
    >
      <Group justify="space-between">
        <Title order={3} size="1.5rem" fw={900} c="white">
          Reel Lense
        </Title>
        <Group gap="lg">
          {navLinks.map((link) => (
                <Anchor
                    key={link.label}
                    href={link.href}
                    size="md"
                    c={pathname === link.href ? "rgb(0, 53, 187)" : "white"}
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
  );
}