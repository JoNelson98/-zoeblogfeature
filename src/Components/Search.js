import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Divider,
  VStack,
  StackDivider,
  Spacer,
  Text,
} from "@chakra-ui/react"
import React from "react"
import SearchModal from "./Modal"
import { Container, Flex, SearchHeader, Title } from "./Styles/Search.styled"
import { BsSearch } from "react-icons/bs"
import { data } from "../Data"

export default function Search() {
  const [filteredData, setFilteredData] = React.useState([])
  const handleFilter = (event) => {
    const searchWord = event.target.value
    const newFilter = data.filter((item) => {
      return item.Title.toLocaleLowerCase().includes(searchWord.toLocaleLowerCase())
    })
    console.log(newFilter.length)
    setFilteredData(newFilter)
    if (searchWord.length < 1) setFilteredData([])
  }

  return (
    <>
      <SearchHeader>
        <Container>
          <Flex>
            <Title>News,articles, and updates</Title>
            <SearchModal>
              <Box py={3}>
                <VStack divider={<StackDivider borderColor="gray.200" />} spacing={5} align="stretch">
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      color="gray.300"
                      fontSize="1.2em"
                      children={
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            paddingBottom: "15px",
                            paddingRight: "15px",
                            color: "#231955",
                          }}
                        >
                          <BsSearch />
                        </div>
                      }
                    />
                    <Input variant="unstyled" placeholder="Search a blog" onChange={handleFilter} />
                    <Spacer size={4} />
                  </InputGroup>
                  {/* <Divider /> */}
                  {filteredData.length !== 0 && (
                    <VStack spacing={5} align="stretch">
                      {filteredData.map((item) => {
                        return (
                          <Box
                            borderRadius="10px"
                            backgroundColor="#eee"
                            h="100px"
                            // overflow="scroll"
                            p={5}
                            _hover={{
                              bg: "green.200",
                            }}
                          >
                            <Text fontSize={17}>{item.Title}</Text>
                          </Box>
                        )
                      })}
                    </VStack>
                  )}
                </VStack>
              </Box>
            </SearchModal>
          </Flex>
        </Container>
      </SearchHeader>
    </>
  )
}
