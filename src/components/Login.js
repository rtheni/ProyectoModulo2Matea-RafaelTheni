import React, { useState } from 'react';
import PList from './Playlist.js';
import error from './LoginError.js';
import styles from '../styles/styles.css';

import userDataList from '../database/userData.json';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import matelogo from '../img/matea_logo.png';
import redlock from '../img/red-lock.gif';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
} from "react-router-dom";
import { Box } from '@material-ui/core';


const Login = () => {
    const history = useHistory();
    
    const [inputEmail, setEmailValue] = useState("");
    const [inputPass, setPassValue] = useState("");

    const saveEmailValue = (e) => {
        setEmailValue(e.target.value);
    };
    const savePassValue = (e) => {
        setPassValue(e.target.value);
    };

    const validateInputs = (e) => {
        if (e.email === inputEmail && e.password === inputPass){
            return true;
        }
        else{
            return false;
        }
    }

    const validateLogin = () => {
        const FilterUser = userDataList.filter(validateInputs);
        console.log(FilterUser);
        if (FilterUser.length > 0){
            history.replace("/playlist")
        }else {
            history.replace("/loginerror")
        }
    }

    return(
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login">
                        <AppBar>
                            <Toolbar className="loginHeader">
                                <img src={matelogo} alt="matea logo"/>
                                <Box fontSize="35px" fontFamily="Righteous">
                                    Mateify
                                </Box>
                            </Toolbar>
                        </AppBar>
                        <Card className="loginCardContent">
                            <CardContent>
                                <img src={redlock} alt="matea logo"/>
                                <Typography>
                                    Ingresar
                                </Typography>
                                <form noValidate autoComplete="off" className="loginForm">
                                    <TextField type="email" onChange={saveEmailValue} id="outlined-basic" label="Correo Electronico" variant="outlined" />
                                    <TextField type="password" onChange={savePassValue}  id="outlined-basic" label="Contraseña" variant="outlined" />
                                    <Button variant="contained" color="secondary" onClick={validateLogin}>COMENZAR A CREAR PLAYLISTS</Button>
                                <Button href="">¿HAS OLVIDADO LA CONTRASEÑA?</Button>
                                <Typography>
                                ¿NO TIENES CUENTA?
                                </Typography>
                                <Button variant="contained" href="">REGISTRATE</Button>
                                </form>
                            </CardContent>
                        </Card>
                    </Route>
                    <Route exact path="/playlist" component={PList} />
                    <Route exact path="/loginerror" component={error} />
                </Switch>
            </div>
        </Router>
        );
}
export default Login;