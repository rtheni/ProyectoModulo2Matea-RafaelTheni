import React from 'react';
import Login from './Login'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';

import matelogo from '../img/matea_logo.png';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Playlist() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/playlist">
                        <AppBar>
                            <Toolbar>
                                <Link to="/">
                                    <img src={matelogo} alt="matea logo"/>
                                    <Typography variant="h6" noWrap>
                                        Mateify
                                    </Typography>
                                </Link>
                                <IconButton
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                            </Toolbar>
                        </AppBar>
                        <form noValidate autoComplete="off">
                            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                        </form>
                        <Card>
                            <CardContent></CardContent>
                        </Card>
                        <Card>
                            <CardContent></CardContent>
                        </Card>
                    </Route>
                    <Route path="/" component={Login} />
                </Switch>
            </div>
        </Router>
    );
}


export default Playlist;