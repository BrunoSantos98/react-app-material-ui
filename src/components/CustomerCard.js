import React, {useState} from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import ModalConfirm from './ModalConfirm'


    const CustomerCard = ({
        id,
        name,
        lastname,
        email,
        avatar,
        onRemoveCustomer,
        onEditCustomer,
    }) => {
        
        const [openModal,setOpenModal] = useState(false)

        const handleToggleOpenModal = () => {
            setOpenModal(!openModal)
        }

        const handleConfirmModal = id => {
            onRemoveCustomer(id)
            handleToggleOpenModal()
        }

        const handleRemoveCustomer = () =>{
            handleToggleOpenModal()
        }

        const handleEditCustomer = id => {
            onEditCustomer(id)
        }

    return (
    <>
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={avatar}>
                        R
                    </Avatar>
            }
            title={`${name} ${lastname}`}
            subheader={email}
            />
            
            <CardActions disableSpacing>
                    <IconButton aria-label="Editar cadastro" onClick = { () => {handleEditCustomer(id)}}>
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="Deletar cadastro" onClick = {handleRemoveCustomer}>
                        <DeleteIcon />
                    </IconButton>
                </CardActions>
            </Card>
            <ModalConfirm
                open={openModal}
                onClose={handleToggleOpenModal}
                onConfirm = { () => {handleConfirmModal(id)} }
                title="deseja realmente exlcuir este cadastro?"
                message="Ao confirmar não poderá reverter esta ação"
            />
        </>
    )}

    export default CustomerCard