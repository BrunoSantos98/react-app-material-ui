import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Toasty = ({open, severity, message, onClose}) => {


    const handleClose = (event, reason) => {
        
        if (reason === 'clickaway') {
            return;
        }

        onClose()
    };



    return (
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>

            <MuiAlert elevation={6} variant="filled" severity={severity}>
                {message}
            </MuiAlert> 

        </Snackbar>

    );
}

export default Toasty