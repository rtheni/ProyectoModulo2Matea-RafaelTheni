import React from 'react';
import Login from './Login';

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';

import matelogo from '../img/matea_logo.png';
import redlock from '../img/red-lock.gif';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

const LoginError = () => {
    
    return(
        <Router>
            <div>
                <Switch>
                    <Route exact path="/loginerror">
                        <Redirect exact from="/loginerror" to="/loginerror" />
                        <AppBar>
                            <Toolbar className="loginHeader">
                                <Link to="/login">
                                    <img src={matelogo} alt="matea logo"/>
                                </Link>
                                <Link to="/login">
                                    <Box fontSize="35px" fontFamily="Righteous">
                                        Mateify
                                    </Box>
                                </Link>
                            </Toolbar>
                        </AppBar>
                        <Card className="loginCardContent">
                            <CardContent>
                                <img src={redlock} alt="matea logo"/>
                                <h2>mmm... algo no salió bien</h2>
                                <p>Debes estar autenticado para acceder a esta página</p>
                            </CardContent>
                        </Card>
                    </Route>
                    <Route exact path='/login' component={Login}></Route>
                </Switch>
            </div>
        </Router>
        );
}
export default LoginError;