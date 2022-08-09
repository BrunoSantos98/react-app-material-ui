import * as React from 'react'
import {useState} from  'react'
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@mui/material'
//import { styled } from '@mui/system';

import { useNavigate } from "react-router-dom"

import HomeIcon from '@mui/icons-material/Home'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import MenuIcon from '@mui/icons-material/Menu'
import PersonIcon from '@mui/icons-material/Person';

import './Header.css'

/*

const MyTypography = styled({Typography})({
    flexGrow:1
})

*/



const Header = () => {

    const [menuOpen,setMenuOpen] = useState(false)
    const history = useNavigate()

    const handleToggleMenu = () =>{
        setMenuOpen(!menuOpen)
    }

    const handleMenuClick = route =>{
        history(route)
        handleToggleMenu()
    }

    return(
        <>
            <AppBar position="static" >
                <Toolbar>
                    <MenuIcon 
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={() => handleToggleMenu()}
                    />
                    <Typography className='arrumandoFlexGrow' variant="h6" component="div">
                    My App
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Drawer open={menuOpen} onClose={() => handleToggleMenu()}>
                <List>
                    <ListItem button onClick={() => handleMenuClick('/')}>
                        <ListItemIcon>
                            <HomeIcon/>
                        </ListItemIcon>
                        <ListItemText>Home</ListItemText>
                    </ListItem>

                    <ListItem button onClick={() => handleMenuClick('/customers')}>
                        <ListItemIcon>
                            <PersonIcon/>
                        </ListItemIcon>
                        <ListItemText>Lista de Clientes</ListItemText>
                    </ListItem>

                    <ListItem button onClick={() => handleMenuClick('/customers/add')}>
                        <ListItemIcon>
                            <PersonAddIcon/>
                        </ListItemIcon>
                        <ListItemText>Cadastro de Clientes</ListItemText>
                    </ListItem>
                </List>
            </Drawer>
        </>
    )
}

export default Header