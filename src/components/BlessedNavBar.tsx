"use client";

import { Home, FileText, CreditCard, Info } from "lucide-react"
import { AnimeNavBar } from "@/components/ui/anime-navbar"

const items = [
  {
    name: "Home",
    url: "#",
    href: "#",
    icon: Home,
  },
  {
    name: "Convert",
    url: "#",
    href: "#",
    icon: FileText,
  },
  {
    name: "Pricing",
    url: "#",
    href: "#",
    icon: CreditCard,
  },
  {
    name: "About",
    url: "#",
    href: "#",
    icon: Info,
  },
]

export function BlessedNavBar() {
  return <AnimeNavBar items={items} defaultActive="Home" />
}
