import Icon from "@chakra-ui/icon"
import { Box, Flex, HStack, Stack } from "@chakra-ui/layout"
import { chakra } from "@chakra-ui/system"
import { useFramework } from "lib/framework"
import { formatUrl } from "lib/pagination-utils"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/router"
import React from "react"
import sidebar from "sidebar.config"

type DocLinkProps = {
  href: LinkProps["href"]
  children: React.ReactNode
}

function DocLink(props: DocLinkProps) {
  const { asPath } = useRouter()
  const { href, children } = props
  const current = href
    .toString()
    .split("/")
    .every((part) => asPath.includes(part))

  return (
    <Box as="li" fontSize="sm">
      <Link href={href} passHref>
        <chakra.a
          aria-current={current ? "page" : undefined}
          textStyle="sidebarLink"
        >
          {children}
        </chakra.a>
      </Link>
    </Box>
  )
}

export function Sidebar() {
  const { framework } = useFramework()

  return (
    <nav aria-label="Sidebar Navigation">
      <Stack as="ul" listStyleType="none" direction="column" spacing="10">
        {sidebar.docs.map((item) => {
          if (item.type === "category") {
            return (
              <li className="sidebar__category" key={item.id}>
                <HStack mb="3" color="green.500">
                  <Icon as={item.icon} />
                  <chakra.h5
                    fontSize="xs"
                    fontWeight="semibold"
                    textTransform="uppercase"
                  >
                    {item.label}
                  </chakra.h5>
                </HStack>
                <Flex as="ul" listStyleType="none" direction="column">
                  {item.items.map((subItem) => {
                    const href = formatUrl(item.id, subItem.id, framework)
                    if (subItem.type === "doc") {
                      return (
                        <DocLink key={subItem.id} href={href}>
                          {subItem.label}
                        </DocLink>
                      )
                    }
                    return null
                  })}
                </Flex>
              </li>
            )
          }

          return null
        })}
      </Stack>
    </nav>
  )
}
