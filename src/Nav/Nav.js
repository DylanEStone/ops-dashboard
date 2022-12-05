import { Navbar,  Text } from "@nextui-org/react";
import { DSNLogo } from "./DSNLogo.js"
{/*import { Button, Link } from "@nextui-org/react";*/}

export default function Nav() {
  return (
    <Navbar isCompact isBordered variant="sticky">
      <Navbar.Brand>
        <DSNLogo />
        <Text b color="inherit" hideIn="xs">
          Deep Space Network Dashboard
        </Text>
      </Navbar.Brand>
    </Navbar>
  )
}
