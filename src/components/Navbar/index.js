import React, { useState } from 'react'
// icons
import { FaBars, FaTimes } from "react-icons/fa"
// bootstrap components
import {
    MobileIcon,
    Nav,
    NavbarContainer,
    NavLogo,
    NavMenu,
    NavItem,
    NavLinks,
} from "./NavbarElements"

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const toggle = () => setOpen(!open)

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        Maeve O'Byrne
                    </NavLogo>
                    <MobileIcon
                        onClick={toggle}
                        role="button"
                        tabIndex={0}
                        aria-expanded={open}
                        aria-label={open ? "Close menu" : "Open menu"}
                        onKeyDown={event => {
                            if (event.key === "Enter" || event.key === " ") {
                                event.preventDefault()
                                toggle()
                            }
                        }}
                    >
                        {open ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                    <NavMenu onClick={toggle} $open={open}>
                        <NavItem>
                            <NavLinks to="/">Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/gallery">Gallery</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/blog">Blog</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/contact">Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
