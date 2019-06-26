import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Principal from './principal.jsx';
import Catalogo from './catalogo.jsx';
import Ventas from './ventas.jsx';
import Info from './info.jsx';
import Login from './login.jsx';

render(
    <Router history={browserHistory}>
        <Route path="/" component={Login} />
        <Route path="/catalogo" component={Catalogo} />
        <Route path="/principal" component={Principal} />
        <Route path="/ventas" component={Ventas} />
        <Route path="/info" component={Info} />
        <Route path="/login" component={Login} />
    </Router>,
    document.getElementById('app')
);
