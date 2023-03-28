import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <Flex
      position={"absolute"}
      bottom={"0"}
      bg={"gray.800"}
      w='100%'
      h='4%'
      color='white'
      alignItems={"center"}
    >
      <Spacer />
      <Text as='b'>Some links or additional info</Text>
      <Spacer />
    </Flex>
  );
};

export default Footer;
