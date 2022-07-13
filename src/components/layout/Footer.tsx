import { Flex, Link, Text } from "@chakra-ui/layout";

const Footer = () => {
  return (
    <Flex as="footer" width="full" align="center" alignSelf="flex-end">
      <Text>
        {new Date().getFullYear()} -{" "}
        <Link href="https://ewingdev.vercel.app/" isExternal fontWeight="semibold">
          ewing.dev
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
