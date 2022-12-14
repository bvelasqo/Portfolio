import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 32px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    transform: rotate(20deg);
  }
`;

const Logo = () => (
  <Link href="/">
    <a href="">
      <LogoBox>
        <>
        <Image src="/logo.png" alt="logo" width="32" height="32" />
        <Text
          color={useColorModeValue("gray.800", "whiteAlpha.900")}
          fontWeight="bold"
          ml={3}>
          Brandon Velasquez
        </Text>
        </>
       
      </LogoBox>
    </a>
  </Link>
);

export default Logo;