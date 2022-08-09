import {Container} from '@mui/material'

import Header from '../partials/Header/Header.js'

const Default = ({children}) => {
    return(
        <>
            <Header />
            <Container sx={{
                padding:'10px 0px',
                }}>
                {children}
            </Container>
        </>
    )
}

export default Default