import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react"
import React from "react"
import { NavbarContainer, Link } from "./Styles/Navbar.styled"

export default function Navbar() {
  return (
    <NavbarContainer>
      <img src="https://irp.cdn-website.com/62eafd47/dms3rep/multi/Cyan+Logo+Black+Text.svg" alt="" />
      <Breadcrumb fontWeight="medium" fontSize="sm">
        <BreadcrumbItem>
          <BreadcrumbLink color="orchid" href="#">
            Blog
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <Link href="#">Login</Link>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <Link href="#">Register</Link>
        </BreadcrumbItem>
      </Breadcrumb>
    </NavbarContainer>
  )
}
