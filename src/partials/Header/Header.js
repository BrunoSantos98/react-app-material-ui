import * as React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
} from '@mui/material'
//import { styled } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu'

import './Header.css'

/*

const MyTypography = styled({Typography})({
    flexGrow:1
})

*/

const Header = () => {

    return(
        <AppBar position="static">
            <Toolbar>
                <MenuIcon 
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                />
                <Typography className='arrumandoFlexGrow' variant="h6" component="div">
                My App
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header