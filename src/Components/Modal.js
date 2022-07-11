import { Modal, ModalBody, ModalContent, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import React from "react"
import { StyledButton } from "./Styles/Search.styled"
import { BsSearch } from "react-icons/bs"

export default function SearchModal({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <StyledButton
        size="md"
        height="40px"
        width="380px"
        border="2px"
        borderColor="#ccd0d5"
        rightIcon={<BsSearch />}
        iconSpacing={52}
        color="#B3B1B8"
        spacing={5}
        justifyContent="flex-start"
        alignItems="center"
        alignContent="center"
        _active={{
          bg: "#dddfe2",
          borderColor: "#bec3c9",
        }}
        _focus={{
          boxShadow: "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
        }}
        variant="solid"
        onClick={onOpen}
      >
        Search a blog...
      </StyledButton>
      <Modal preserveScrollBarGap isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
