"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";
import { Braces } from "lucide-react";
import { menuItems, NavbarItems, SiteConfig } from "@/lib/config";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default function MainNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll isBordered>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        {/* @ts-ignore */}
        <NavbarBrand as={Link} href="/" color="foreground">
          <Braces />
          <p className="font-bold text-inherit">{SiteConfig.title}</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {NavbarItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <Link
              color={item.color ? (item.color as any) : "primary"}
              href={item.link}
              isExternal={item.title === "Resume"}
            >
              {item.title}  
            </Link>
          </NavbarItem>
        ))}
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 1
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "success"
                  : "foreground"
              }
              className="w-full"
              href={
                item.toLowerCase() === "home"
                  ? "/"
                  : `/${item.toLowerCase().replace(" ", "-")}`
              }
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}