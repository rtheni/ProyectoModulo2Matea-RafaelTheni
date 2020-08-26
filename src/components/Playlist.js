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

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
                            <CardContent>
                                <TableContainer component={Paper}>
                                    <Table aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Nombre</TableCell>
                                                <TableCell>Artista</TableCell>
                                                <TableCell>Album</TableCell>
                                                <TableCell>Duracion</TableCell>
                                                <TableCell align="right">Agregar</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                        <div><p>No hay resultados: utiliza la barra de busqueda para encontrar canciones</p></div>
                                            <TableRow key="">
                                            <TableCell component="th" scope="row"></TableCell>
                                            <TableCell></TableCell>
                                            <TableCell></TableCell>
                                            <TableCell></TableCell>
                                            <TableCell align="right"></TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent>
                                <TableContainer component={Paper}>
                                    <Table aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Nombre</TableCell>
                                                <TableCell>Artista</TableCell>
                                                <TableCell>Duracion</TableCell>
                                                <TableCell>Cant. Votos</TableCell>
                                                <TableCell align="right">Votar</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <div><h2>UPS! TU PLAYLIST AUN ESTA VACIA</h2><p>Comienza a agregar canciones</p></div>
                                            <TableRow key="">
                                            <TableCell component="th" scope="row"></TableCell>
                                            <TableCell></TableCell>
                                            <TableCell></TableCell>
                                            <TableCell></TableCell>
                                            <TableCell align="right"></TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </CardContent>
                        </Card>
                    </Route>
                    <Route path="/" component={Login} />
                </Switch>
            </div>
        </Router>
    )
}


export default Playlist;