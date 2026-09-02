// navbar is styled by styled-components plugin
import styled from "styled-components"
import { Link } from "gatsby"

export const Nav = styled.nav`
    background-color: var(--oyster);
    height: var(--header-height);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 999;
    border-bottom: 1px solid var(--rule);
`
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: var(--header-height);
    z-index: 1;
    width: 100%;
    padding: 0 5%;
`
export const NavLogo = styled(Link)`
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-family: var(--display);
    font-size: 1.55rem;
    font-weight: 600;
    letter-spacing: -0.015em;
    line-height: 1;
    color: var(--marine);
    display: flex;
    align-items: center;

    &:hover,
    &:focus-visible {
        color: var(--teal-dark);
        transition: color 0.3s ease;
    }
`
export const MobileIcon = styled.div`
	display: none;

	@media screen and (max-width: 960px) {
		display: block;
		position: absolute;
		top: 0;
		right: 5%;
		transform: translate(0, 60%);
		font-size: 1.8rem;
		cursor: pointer;
		color: var(--marine);
}
`
export const NavMenu = styled.ul`
	display: flex;
    align-items: center;
    gap: 30px;
    list-style: none;
    text-align: center;
    /* explicit, because bootstrap's reboot sets ul,ol{margin-bottom:1rem} and an
       element selector always beats the * reset in layout.css. That 1rem was
       being counted by the flex centering and pushing the whole menu up. */
    margin: 0;
    padding: 0;

    @media screen and (max-width: 960px) {
		display: flex;
        flex-direction: column;
        gap: 0;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: ${({ $open }) => ($open ? "100%" : "-1000px")};
            opacity: 1;
            transition: all 0.2s ease;
            background: var(--oyster);
}
`
export const NavItem = styled.li`
    display: flex;
    align-items: center;

    @media screen and (max-width: 960px) {
        width: 100%;
    }
`

export const NavLinks = styled(Link)`
    font-family: var(--body);
    font-size: 0.8125rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--marine-soft);
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 6px 0;
    border-bottom: 2px solid transparent;
    transition: color 200ms ease, border-color 200ms ease;

    &:hover,
    &:focus-visible {
        color: var(--teal-dark);
        border-bottom-color: var(--teal-dark);
    }

    &[aria-current="page"] {
        color: var(--teal-dark);
        border-bottom-color: var(--teal-dark);
    }

    @media screen and (max-width: 960px) {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;
        border-bottom: none;
    }
`
