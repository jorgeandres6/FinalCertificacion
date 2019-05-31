import React from 'react';
import { Row, Input, Col, TextInput, Icon, Navbar, NavItem } from 'react-materialize';

class Principal extends React.Component{
  render() {
    return(
      <div className="contenedor_principal">
        <Navbar brand={<div>La Tiendita <Icon left>store</Icon></div>} alignLinks="right">
            <NavItem href="">
              <Icon>
                home
              </Icon>
            </NavItem>
            <NavItem href="">
              <Icon>
                shopping_cart
              </Icon>
            </NavItem>
            <NavItem href="">
              <Icon>
                power_settings_new
              </Icon>
            </NavItem>
        </Navbar>
      </div>
    )
  }
}

export default Principal;
