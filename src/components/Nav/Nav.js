import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import Home from '../../pages/Home/Home'
import Editor from '../../pages/Editor/Editor'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const NavB = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
<Router>
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">UseLess</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/editor">Editor</NavLink>
            </NavItem>
          </Nav>
          <NavbarText><NavLink href="/">API.com</NavLink></NavbarText>
        </Collapse>
      </Navbar>
    </div>

<div>
 

  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/editor">
      <Editor />
    </Route>
  </Switch>
</div>
</Router>
  );
}

export default NavB;