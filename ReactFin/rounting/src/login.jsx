import React from 'react';
import { Row, Col, TextInput, Icon, Button} from 'react-materialize';
import { getDatos } from './utils/httpService';
import { toast } from 'materialize-css';
import { Link, Redirect} from 'react-router-dom'
import { Router, Route, } from 'react-router';
import PropTypes from "prop-types";

class Login extends React.Component{

  constructor(){
    super ();
    this.state = {usuario:'',psw:'',log:false};
  }

  handleChange(event) {
    this.setState({usuario: event.target.value});
  }

  handleChangeP(event) {
    this.setState({psw: event.target.value});
  }

  login(e, usuario, psw){
    getDatos(usuario).then(response => {
      if (response.data == psw){
        localStorage.setItem('usuario', usuario);
        this.setState({log:true});
      }else{
        toast({
          html: 'Usuario o contraseña incorrecta',
          displayLength: 1000
        })
      }
    });
    e.preventDefault();
  }

  componentWillMount(){
    sessionStorage.clear();
  }

  render() {
    if (this.state.log === true) {
      return <Redirect to='/principal/'/>
    }

    return(
      <div className="contenedor_principal">
        <div className="container">
          <Row>
            <Col s={4} offset="s4">
              <h1>LOGIN</h1>
            </Col>
          </Row>

          <form onSubmit={(e) => this.login(e,this.state.usuario,this.state.psw)}>
            <Row>
                <Col s={4} offset="s4">
                  <TextInput label="Usuario" validate required value={this.state.usuario} onChange={this.handleChange.bind(this)}/>
                </Col>
            </Row>

            <Row>
                <Col s={4} offset="s4">
                  <TextInput label="Password" password validate required value={this.state.psw} onChange={this.handleChangeP.bind(this)}/>
                </Col>
            </Row>

            <Row>
                <Col s={4} offset="s4">
                  <Button waves="light" type="submit">Ingresar
                      <Icon right>send</Icon>
                  </Button>
                </Col>
            </Row>
          </form>

        </div>
      </div>

    )
  }
}

export default Login;
