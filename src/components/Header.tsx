import { Box, Flex, Spacer } from "@chakra-ui/react";
import { FC } from "react";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <Flex
      bg={"gray.800"}
      w='100%'
      h='8%'
      color='white'
      alignItems={"center"}
    >
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Box>
        <Link to='/'>Home</Link>
      </Box>
      <Spacer />
      <Box>
        <Link to='/counter'>Counter</Link>
      </Box>
      <Spacer />
      <Box>
        <Link to='/about'>About</Link>
      </Box>
      <Spacer />
      <Box>
        <Link to='/FAQ'>FAQ</Link>
      </Box>
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
    </Flex>
  );
};

export default Header;
