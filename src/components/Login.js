import React from 'react';
import PList from './Playlist.js'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import matelogo from '../img/matea_logo.png';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Login = () => {
    return(
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <AppBar>
                            <Toolbar>
                                <img src={matelogo} alt="matea logo"/>
                                <Typography variant="h6" noWrap>
                                    Mateify
                                </Typography>
                            </Toolbar>
                        </AppBar>
                        <Card>
                            <CardContent>
                                <img src={matelogo} alt="matea logo"/>
                                <Typography>
                                    Ingresar
                                </Typography>
                                <form noValidate autoComplete="off">
                                    <TextField id="outlined-basic" label="Correo Electronico" variant="outlined" />
                                    <TextField id="outlined-basic" label="Contraseña" variant="outlined" />
                                </form>
                                <Link to="/playlist" role="button"><Button variant="contained" color="secondary">COMENZAR A CREAR PLAYLISTS</Button></Link>
                                <Button href="">?HAS OLVIDADO LA CONTRASEÑA?</Button>
                                <Typography>
                                    ?NO TIENES CUENTA?
                                </Typography>
                                <Button variant="contained" href="">REGISTRATE</Button>
                            </CardContent>
                        </Card>
                    </Route>
                    <Route path="/playlist" component={PList} />
                </Switch>
            </div>
        </Router>);
}


export default Login;