import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";

import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiPostman,
  SiHtml5,
  SiCss3,
  SiRedux,
  SiTypescript,
  SiReact,
  SiNextdotjs,
} from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";

interface FeatureProps {
  text: string;
  icon: React.ReactElement;
  iconBg: string;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"} style={{ wordWrap: "normal", maxWidth: "100%", minWidth: "100%" }} transition={'all 0.2s ease-in-out'} _hover={{
      transform: 'scale(1.05)',
    }}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function Skills() {
  return (
    <Container py={12} id="Skills" style={{ marginLeft: "0", paddingInlineStart: "0", paddingInlineEnd: "0", alignItems: "center", justifyContent: "center" }}>
      <SimpleGrid columns={{ base: 2, md: 2, lg: 2 }} spacing={{ base: 12, lg: 32 }}>
        <Stack spacing={2}>
          <Flex gap={10} direction={{ base: "row", md: "row" }}>
            <Box style={{ marginLeft: "4px", minWidth: '100%' }}>
              <Stack
                spacing={4}
                divider={
                  <StackDivider
                    borderColor={useColorModeValue("gray.100", "gray.700")}
                    margin={0}
                  />
                }
                width="100%"
              >
                <Feature
                  icon={<Icon as={SiExpress} color={"yellow.500"} w={6} h={6} />}
                  iconBg={useColorModeValue("yellow.100", "yellow.900")}
                  text={"Express Js"}
                />
                <Feature
                  icon={<Icon as={SiTypescript} color={"green.500"} w={6} h={6} />}
                  iconBg={useColorModeValue("green.100", "green.900")}
                  text={"Typescript"}
                />
                <Feature
                  icon={
                    <Icon as={DiJavascript1} color={"purple.500"} w={6} h={6} />
                  }
                  iconBg={useColorModeValue("purple.100", "purple.900")}
                  text={"JavaScript"}
                />
              </Stack>
            </Box>
            <Box style={{ marginLeft: "4px",  minWidth: '100%' }}>
              <Stack
                spacing={4}
                divider={
                  <StackDivider
                    borderColor={useColorModeValue("gray.100", "gray.700")}
                  />
                }
                width="100%"
              >
                <Feature
                  icon={<Icon as={FaNodeJs} color={"yellow.500"} w={6} h={6} />}
                  iconBg={useColorModeValue("yellow.100", "yellow.900")}
                  text={"Node Js"}
                />
                <Feature
                  icon={<Icon as={SiReact} color={"green.500"} w={6} h={6} />}
                  iconBg={useColorModeValue("green.100", "green.900")}
                  text={"React Js"}
                />
                <Feature
                  icon={
                    <Icon as={SiNextdotjs} color={"purple.500"} w={6} h={6} />
                  }
                  iconBg={useColorModeValue("purple.100", "purple.900")}
                  text={"Next Js"}
                />
              </Stack>
            </Box>
          </Flex>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
