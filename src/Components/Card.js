import React from "react"
import { Box, Center, Heading, Text, Stack, Image, useColorModeValue } from "@chakra-ui/react"
export default function Card({ item: { image, Title, Description } }) {
  return (
    <Center p={4} py={12}>
      <Box
        maxW={"345px"}
        height={"550px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Box overflow={"hidden"} h={"210px"} bg={"gray.100"} mt={-6} mx={-6} mb={12} pos={"relative"}>
          <Image src={image ?? "https://via.placeholder.com/150"} layout={"fill"} />
        </Box>
        <Box>
          <Stack>
            <Heading mb={3} pr={20} fontWeight="bold" color="black" fontSize={"xl"}>
              {Title}
            </Heading>
            <Text fontWeight={"semibold"} fontSize={17} color={"gray.500"}>
              {Description}
            </Text>
          </Stack>
        </Box>
      </Box>
    </Center>
  )
}
