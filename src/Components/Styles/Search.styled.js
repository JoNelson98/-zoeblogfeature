import { Input, chakra, Button, Modal } from "@chakra-ui/react"
import styled from "styled-components"
//
export const SearchHeader = styled.div`
  max-width: 100%;
  height: 200px;
  background-color: #0f0f52;
  margin: 0 0;
`

export const Container = styled.div`
  width: 800px;
  max-width: 100%;
  padding: 30px 0 10px;
  margin: 0 auto;
`

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export const Title = styled.h1`
  font-weight: bold;
  color: white;
  font-size: 40px;
`
export const StyledInput = chakra(Input, {
  baseStyle: {
    borderRadius: "30px",
    backgroundColor: "#fff",
  },
})
export const StyledButton = chakra(Button, {
  baseStyle: {
    borderRadius: "30px",
  },
})

export const StyledModal = chakra(Modal, {
  baseStyle: {
    zIndex: "999",
  },
})
