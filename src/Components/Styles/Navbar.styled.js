import { BreadcrumbLink } from "@chakra-ui/react"
import styled from "styled-components"

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  margin: 0;
  height: 80px;
  img {
    flex-grow: 1;
    max-width: 150px;
  }
`

export const Link = styled(BreadcrumbLink)`
  text-decoration: none;
  font-weight: bold;
`
