import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import matelogo from '../img/matea_logo.png';

const Login = () => {
    return(<div>
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
            <Button variant="contained" color="secondary" href="">COMENZAR A CREAR PLAYLISTS</Button>
            <Button href="">?HAS OLVIDADO LA CONTRASEÑA?</Button>
            <Typography>?NO TIENES CUENTA?</Typography>
            <Button variant="contained" href="">REGISTRATE</Button>
          </CardContent>
        </Card>
      </div>);
}

export default Login;