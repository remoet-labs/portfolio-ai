import { Card, Flex, Heading, IconButton, Link, Text } from "@radix-ui/themes";
import { FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <Card>
      <Flex p="4" justify="center" align="center" gap="4" direction="column">
        <Heading size="7" as="h2">
          Powered by{" "}
          <Link target="_blank" href="https://remoet.dev">
            remoet.dev
          </Link>
        </Heading>

        <IconButton className="pointer" size="4" variant="outline">
          <FiGithub />
        </IconButton>

        <Text size="2" color="gray">
          MIT License
        </Text>
      </Flex>
    </Card>
  );
};

export default Footer;
