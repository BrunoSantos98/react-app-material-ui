import {useState} from 'react'
import axios from 'axios'
import {TextField, Button, CircularProgress} from '@mui/material';
import './Register.css'
import Toasty from '../../components/Toasty.js'

const Register = () => {

    const [form,setForm] = useState({
        name:{
            value:'',
            error:false,
        },
        job:{
            value:'',
            error:false,
        },
    })

    const [openToasty,setOpenToasty] = useState({
        open:false,
        message:'',
        severity:'  '
    })

    const [isLoading,setIsLoading] = useState(false)

    const handleInputChange = (e) =>{
        const {name,value} = e.target

        setForm({
            ...form,
            [name]:{
                value,
            }
        })
    }

    const handleRegisterButton = () => {
        setIsLoading(true)

        let hasError=false
        let newFormState = {
            ...form,
        }

        if(!form.name.value){
            hasError = true
            setIsLoading(false)
            setOpenToasty({
                open:true,
                message:'Por favor preencha os campos corretamente',
                severity:'error'
            })

            newFormState.name = {
                value:form.name.value,
                error:true,
                helperText:"Digite o campo Nome corretamente"
            }
        }

        if(!form.job.value){
            hasError = true
            setIsLoading(false)
            setOpenToasty({
                open:true,
                message:'Por favor preencha os campos corretamente',
                severity:'error'
            })

            newFormState.job = {
                value:form.job.value,
                error:true,
                helperText:"Digite o campo Cargo corretamente"
            }
        }

        if(hasError){
            return setForm(newFormState)
        }

        axios.post("https://reqres.in/api/users",{
            name:form.name.value,
            job:form.job.value,
        }).then(() => {
            setOpenToasty({
                open:true,
                message:'Os campos foram enviado com êxito',
                severity:'success'
            })
            setIsLoading(false)
        })

    }

    return(
        <>
            <div className="register">
                <TextField
                    error={form.name.error}
                    helperText={form.name.error ? form.name.helperText : ''}
                    label='Digite o seu Nome' 
                    variant='standard' 
                    name='name' 
                    value={form.name.value} 
                    onChange={handleInputChange}
                />
            </div>

            <div className="register">
                <TextField 
                    error={form.job.error}
                    helperText={form.job.error ? form.job.helperText : ''}
                    label='Digite o seu Cargo' 
                    variant='standard' 
                    name='job' 
                    value={form.job.value} 
                    onChange={handleInputChange}
                />
            </div>

            <div className="register">
                <Button variant='contained' color='primary' onClick={handleRegisterButton} disabled={isLoading}>
                    {
                        isLoading ? "Sending Data"  : "Cadastrar"
                    }
                    <CircularProgress sx={isLoading ? {display:'inline', marginLeft:3} : {display:'none'}}/>
                </Button>
            </div>
            <Toasty open={openToasty.open} onClose={() => setOpenToasty(false)} severity={openToasty.severity} message={openToasty.message}/>
        </>
    )
}

export default Register