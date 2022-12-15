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

  > img {
    transition: transform 0.2s;
  }

  &:hover img {
    transform: rotate(20deg);
  }
`;


const Logo = () => {
  const footPrintImage = useColorModeValue("/logo.png", "/corona.png");
  return (
  <Link href="/">

    <LogoBox>
      <>
      <Image src={footPrintImage} alt="logo" width="32" height="32" style={{borderRadius: "50%"}} />
      <Text
        color={useColorModeValue("blue.800", "whiteAlpha.900")}
        fontWeight="bold"
        letterSpacing="wide"
        ml={3} mt={2}>
        Brand.ondev
      </Text>
      </>
     
    </LogoBox>

  </Link>)
};

export default Logo;