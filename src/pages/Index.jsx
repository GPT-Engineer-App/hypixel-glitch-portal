import React from "react";
import { Box, Container, Heading, Text, VStack, Image, SimpleGrid, Badge, Divider, Button, Icon } from "@chakra-ui/react";
import { FaBug, FaDiscord, FaTwitter, FaYoutube } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} as="section">
        <Image src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoeXBpeGVsJTIwbG9nb3xlbnwwfHx8fDE3MTAyODgxMDF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Hypixel Logo" boxSize="150px" objectFit="contain" />
        <Heading as="h1" size="2xl">
          Hypixel Glitching Community
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Discover and share the latest glitches on the Hypixel network. Join our community to stay up to date!
        </Text>
        <Divider />
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} w="full">
          <FeatureCard icon={FaBug} title="Latest Glitches" description="Find the newest glitches across different Hypixel games. Use them before they get patched!" />
          <FeatureCard icon={FaDiscord} title="Join Discord" description="Connect with other glitch hunters, share your finds and get real-time updates in our Discord server." />
          <FeatureCard icon={FaYoutube} title="Tutorial Videos" description="Watch our step-by-step tutorials to replicate glitches and have fun on the Hypixel network." />
        </SimpleGrid>
      </VStack>

      <VStack spacing={8} as="section" mt={16}>
        <Heading as="h2" size="xl">
          Stay Connected
        </Heading>
        <Text fontSize="lg">Follow us on social media to get the latest news and updates about Hypixel glitches.</Text>
        <Box>
          <Button leftIcon={<Icon as={FaTwitter} />} colorScheme="twitter" mr={4}>
            Twitter
          </Button>
          <Button leftIcon={<Icon as={FaYoutube} />} colorScheme="red">
            YouTube
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <VStack p={5} boxShadow="md" borderRadius="lg" align="start" spacing={3} bg="gray.50">
      <Icon as={icon} w={10} h={10} color="teal.500" />
      <Heading as="h3" size="md">
        {title}
      </Heading>
      <Text color="gray.600">{description}</Text>
    </VStack>
  );
};

export default Index;
