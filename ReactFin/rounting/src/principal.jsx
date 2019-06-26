import React from 'react';
import { Row, Input, Col, TextInput, Icon, Navbar, NavItem } from 'react-materialize';
import { Route, Link } from 'react-router-dom';
import Ventas from './ventas';
import Info from './info';
import Catalogo from './catalogo';

class Principal extends React.Component{
  render() {
    return(
      <div className="contenedor_principal">
        <Navbar brand={<div>La Tiendita <Icon left>store</Icon></div>} alignLinks="right">
            <NavItem>
              <Link to="/principal">
                <Icon>
                  home
                </Icon>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/principal/ventas">
                <Icon>
                  shopping_cart
                </Icon>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/login">
                <Icon>
                  power_settings_new
                </Icon>
              </Link>
            </NavItem>
        </Navbar>
        <Route exact path="/principal/" component={Catalogo} />
        <Route path="/principal/catalogo" component={Catalogo} />
        <Route path="/principal/ventas" component={Ventas} />
        <Route path="/principal/info" component={Info} />
      </div>
    )
  }
}

export default Principal;
