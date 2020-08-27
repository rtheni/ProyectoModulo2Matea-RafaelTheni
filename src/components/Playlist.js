import React, {useState} from 'react';
import Login from './Login'
import styles from '../styles/login.css'

import songDataList from '../database/songData.json';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import AddCircle from '@material-ui/icons/AddCircle';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

import matelogo from '../img/matea_logo.png';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

function Playlist() {
    const [inputSearch, setSearchValue] = useState("");
    const [filterSong, setArrayValue] = useState([]);
    const [addedSong, setArrayAddedValue] = useState([]);

    const saveSearchValue = (e) => {
        setSearchValue(e.target.value);
        validateSong()
    };

    const validateSearch = (e) => {
        if (e.name.toLowerCase().includes(inputSearch.toLowerCase())){
            return true;
        }
        else{
            return false;
        }
    }

    const validateSong = () => {
        setArrayValue(songDataList.filter(validateSearch));
        console.log(filterSong);
        if (filterSong.length > 0){
            console.log("si tiene canciones")
        }else {
            console.log("no tiene canciones")
        }
    }
    const addSongPlaylist = (song) => {
        setArrayAddedValue([...addedSong, song]);
        console.log(addedSong)
    }

    
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/playlist">
                        <Redirect exact from="/playlist" to="/playlist" />
                        <AppBar className="loginHeader">
                            <Toolbar>
                                <Link to="/login">
                                    <img src={matelogo} alt="matea logo" className="playlistHeaderLogo"/>
                                </Link>
                                <Link to="/login">
                                    <Box fontSize="35px" fontFamily="Righteous" className="playlistHeaderTitle">
                                        Mateify
                                    </Box>
                                </Link>
                                <div className="playlistHeaderIcon">
                                <IconButton
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                                </div>
                            </Toolbar>
                        </AppBar>
                        <div className="playlistContent">
                        <form noValidate autoComplete="off">
                            <TextField id="outlined-basic" label="Buscar" variant="outlined" onChange={saveSearchValue}/>
                        </form>
                        <Card className="loginCardContent">
                            <h2>Resultados</h2>
                            <CardContent>
                                <TableContainer component={Paper}>
                                    <Table aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Nombre</TableCell>
                                                <TableCell>Artista</TableCell>
                                                <TableCell>Álbum</TableCell>
                                                <TableCell>Duración</TableCell>
                                                <TableCell align="right">Agregar</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {filterSong.map ((song) => (
                                                <TableRow key={song.uuid}>
                                                    <TableCell component="th" scope="row"><img src={song.artist.coverUrl} alt="matea logo"/>{song.name}</TableCell>
                                                    <TableCell>{song.artist.name}</TableCell>
                                                    <TableCell>{song.album}</TableCell>
                                                    <TableCell>{song.duration}</TableCell>
                                                    <TableCell align="right"><IconButton color="secondary" aria-label="addsong" onClick={() => addSongPlaylist(song)} component="span"><AddCircle fontSize="large"/></IconButton></TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </CardContent>
                        </Card>
                        <Card className="loginCardContent">
                            <h2>Tu playlist</h2>
                            <CardContent>
                                <TableContainer component={Paper}>
                                    <Table aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Nombre</TableCell>
                                                <TableCell>Artista</TableCell>
                                                <TableCell>Duración</TableCell>
                                                <TableCell>Cant. Votos</TableCell>
                                                <TableCell align="right">Votar</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {addedSong.map ((song) => (
                                                <TableRow key={song.uuid}>
                                                    <TableCell component="th" scope="row"><img src={song.artist.coverUrl} alt="matea logo"/>{song.name}</TableCell>
                                                    <TableCell>{song.artist.name}</TableCell>
                                                    <TableCell>{song.duration}</TableCell>
                                                    <TableCell>0</TableCell>
                                                    <TableCell align="right"><button>+</button><button>-</button></TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </CardContent>
                        </Card>
                        </div>
                    </Route>
                    <Route exact path="/login" component={Login} />
                </Switch>
            </div>
        </Router>
    )
}


export default Playlist;