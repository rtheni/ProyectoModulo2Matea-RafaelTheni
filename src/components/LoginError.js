import React from 'react';
import Login from './Login';

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import matelogo from '../img/matea_logo.png';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";

const LoginError = () => {
    return(
        <Router>
            <div>
                <Switch>
                    <Route exact path="/LoginError">
                        <AppBar>
                            <Link to="/">
                                <img src={matelogo} alt="matea logo"/>
                                <Typography variant="h6" noWrap>
                                    Mateify
                                </Typography>
                            </Link>
                        </AppBar>
                        <Card>
                            <CardContent>
                                <img src={matelogo} alt="matea logo"/>
                                <h2>mmm... algo no salio bien</h2>
                                <p>Debes estar autenticado para acceder a esta pagina</p>
                            </CardContent>
                        </Card>
                    </Route>
                    <Route path='/' component={Login}></Route>
                </Switch>
            </div>
        </Router>
        );
}
export default LoginError;