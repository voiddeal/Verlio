"use client"

import {
  AppBar,
  Button,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material"
import { useState, useRef, useEffect } from "react"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import NavButton from "./nav-button/NavButton"
import Link from "next/link"

export default function Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const header = useRef<HTMLElement>(null)
  const navbarDetachmentThreshold = 20
  const [isNavbarDetached, setIsNavbarDetached] = useState(
    window.scrollY > navbarDetachmentThreshold
  )
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleScroll = () => {
    if (window.scrollY > navbarDetachmentThreshold) {
      // If the user is scrolling down, hide the navbar
      setIsNavbarDetached(true)
    } else {
      // If the user is scrolling up, show the navbar
      setIsNavbarDetached(false)
    }
    console.log(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      ref={header}
      className={`fixed top-0 z-10 w-full m-auto inset-0 transition-all duration-500 ${
        isNavbarDetached ? "top-5 w-11/12 bg-opacity-40 rounded-lg" : ""
      }`}
    >
      <nav className="bg-black bg-opacity-[inherit] backdrop-blur-md rounded-[inherit] text-stone-100">
        <ul className="flex items-center gap-x-4 px-4 h-10">
          <li className="flex-grow">
            <Link href="/">Verlio</Link>
          </li>
          <li>
            <Link href="/" className="shadow-white hover:shadow-lg ">
              Home
            </Link>
          </li>
          <li>
            <Link href="/">Reservations</Link>
          </li>
          <li>
            <Link href="/">Order Online</Link>
          </li>
          <li>
            <Link href="/">Menu</Link>
          </li>
          <li>
            <Link href="/">Discover</Link>
          </li>
        </ul>
      </nav>
    </header>
  )

  return (
    <AppBar position="sticky" className="bg-cyan-700 h-20">
      <Toolbar className=" ">
        <div className="flex-grow">Verlio</div>
        <Stack direction="row" spacing={1}>
          <NavButton title="Home" />
          <NavButton title="Menu" />
          <NavButton title="Reservations" />
          <NavButton title="Order Online" />
          <Button
            color="inherit"
            onClick={handleClick}
            aria-controls={open ? "resources-menu" : undefined}
            aria-haspopup={true}
            aria-expanded={open ? "true" : undefined}
            className={`nav-btn flex flex-col ${open && "open"}`}
          >
            Discover
            <KeyboardArrowDownIcon />
          </Button>
        </Stack>
        <Menu
          id="resources-menu"
          anchorEl={anchorEl}
          open={open}
          aria-labelledby="resources-button"
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          slotProps={{
            paper: {
              sx: {
                minWidth: `180px`,
                textAlign: "center",
              },
            },
          }}
        >
          <MenuItem onClick={handleClose} className="text-center">
            Location
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            sx={{ textAlign: "center", width: "100%" }}
          >
            Contact
          </MenuItem>
          <MenuItem onClick={handleClose}>Gallery</MenuItem>
          <MenuItem onClick={handleClose}>Events</MenuItem>
          <MenuItem onClick={handleClose}>About Us</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}
