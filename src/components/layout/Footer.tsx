import { Flex, Link, Text } from "@chakra-ui/layout";

const Footer = () => {
  return (
    <Flex as="footer" width="full" align="center" alignSelf="flex-end">
      <Text>
        {new Date().getFullYear()} -{" "}
        <Link href="https://makemyqr.ml/" isExternal fontWeight="semibold">
          Make My QR by Jashan Sidhu
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
