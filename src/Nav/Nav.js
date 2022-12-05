import './Nav.css';
import { Navbar,  Text } from "@nextui-org/react";
import { GiOrbit } from "react-icons/gi";

export default function Nav() {
  return (
    <Navbar isCompact isBordered variant="sticky">
      <Navbar.Brand>
        <GiOrbit />
        <Text b color="inherit" hideIn="xs">
          Deep Space Network Dashboard
        </Text>
      </Navbar.Brand>
    </Navbar>
  )
}
