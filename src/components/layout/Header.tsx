import { Box, Flex, Heading, Text } from "@chakra-ui/layout";

import AccessibleLink from "components/AccessibleLink";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <Flex as="header" width="full" align="center" alignSelf="flex-start">
      <AccessibleLink href="/">
        <Heading as="h1" size="md">
          Make My QR
        </Heading>
        <Text fontSize="xs">Make Your Live QR from any Text or URL</Text>
      </AccessibleLink>

      <Box marginLeft="auto">
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;
