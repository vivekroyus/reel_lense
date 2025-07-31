"use client";
import { Box, Title, Text, Stack, Center, Group } from "@mantine/core";
import { motion } from "framer-motion";
import { IconUpload, IconRobot, IconSparkles } from "@tabler/icons-react"; // Changed download to sparkles

const steps = [
  {
    title: "Upload Your Script",
    description: "Easily upload your screenplay or script in PDF or text format.",
    icon: IconUpload,
  },
  {
    title: "AI Scores & Suggests",
    description: "Our AI analyzes your script, scores it, and provides actionable suggestions.",
    icon: IconRobot,
  },
  {
    title: "Download & Improve",
    description: "Download your improved script or iterate further with instant feedback.",
    icon: IconSparkles, // Changed icon here
  },
];

export default function HowItWorks() {
  return (
    <Box
      style={{
        background: "rgb(166, 191, 255)", // Soft blue/white
        marginBottom: 40,
        boxShadow: "0 8px 32px rgba(79,140,255,0.07)",
      }}
      px={{ base: 0, sm: 32 }}
      py={32}
    >
      <Title
        order={1}
        ta="center"
        mb="xl"
        mt={60}
        style={{
          fontSize: "3.5rem",
          fontWeight: 900,
          letterSpacing: "-2px",
          lineHeight: 1.1,
        }}
      >
        How It Works
      </Title>
      {steps.map((step, idx) => {
        const StepIcon = step.icon;
        const isEven = idx % 2 === 0;

        return (
          <Box
            key={step.title}
            style={{
              minHeight: 340,
              paddingTop: 48,
              paddingBottom: 48,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {/* Left side */}
            <Box style={{ flex: 1, display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
              {isEven && (
                <motion.div
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  style={{ width: "100%", maxWidth: 400, paddingRight: 32 }}
                >
                  <Group align="flex-start" gap="md">
                    <Center
                      style={{
                        width: 70,
                        height: 70,
                        borderRadius: "50%",
                        background: "#f3f7ff",
                        marginTop: 4,
                        flexShrink: 0,
                      }}
                    >
                      <StepIcon size={40} color="#4f8cff" stroke={1.5} />
                    </Center>
                    <Stack gap={0} style={{ flex: 1 }}>
                      <Title order={3} style={{ fontSize: "1.5rem", fontWeight: 700 }}>
                        {step.title}
                      </Title>
                      <Text size="lg" c="dimmed">
                        {step.description}
                      </Text>
                    </Stack>
                  </Group>
                </motion.div>
              )}
            </Box>

            {/* Center: Numbered Circle */}
            <Box
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                zIndex: 2,
                height: "100%",
                justifyContent: "center",
                minWidth: 80,
              }}
            >
              <Center style={{ zIndex: 2 }}>
                <motion.div
                  initial={{ scale: 0.7, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <Box
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      background: "#4f8cff",
                      color: "white",
                      fontSize: 36,
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 4px 24px rgba(79,140,255,0.15)",
                    }}
                  >
                    {idx + 1}
                  </Box>
                </motion.div>
              </Center>
            </Box>

            {/* Right side */}
            <Box style={{ flex: 1, display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
              {!isEven && (
                <motion.div
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  style={{ width: "100%", maxWidth: 400, paddingLeft: 32 }}
                >
                  <Group align="flex-start" gap="md">
                    <Center
                      style={{
                        width: 70,
                        height: 70,
                        borderRadius: "50%",
                        background: "#f3f7ff",
                        marginTop: 4,
                        flexShrink: 0,
                      }}
                    >
                      <StepIcon size={40} color="#4f8cff" stroke={1.5} />
                    </Center>
                    <Stack gap={0} style={{ flex: 1 }}>
                      <Title order={3} style={{ fontSize: "1.5rem", fontWeight: 700 }}>
                        {step.title}
                      </Title>
                      <Text size="lg" c="dimmed">
                        {step.description}
                      </Text>
                    </Stack>
                  </Group>
                </motion.div>
              )}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}