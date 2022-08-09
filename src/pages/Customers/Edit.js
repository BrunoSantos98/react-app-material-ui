import {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom';
import {TextField, Button, CircularProgress} from '@mui/material';
import './Register.css'
import Toasty from '../../components/Toasty.js'

const Edit = () => {

    const {id} = useParams()
    
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

    useEffect(() =>{
        axios.get(`https://reqres.in/api/users/${id}`)
        .then(response  => {
            const {data} = response.data
            
            setForm({
                name:{
                    value:data.first_name,
                    error:false,
                },
                job:{
                    value:data.job,
                    error:false,
                },
            })
        })
    },[])



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

        axios.put(`https://reqres.in/api/users/${id}`,{
            name:form.name.value,
            job:form.job.value,
        }).then(() => {
            setOpenToasty({
                open:true,
                message:'Registro atualizado com sucesso',
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
                        isLoading ? "Sending Data"  : "Salvar Alterações"
                    }
                    <CircularProgress sx={isLoading ? {display:'inline', marginLeft:3} : {display:'none'}}/>
                </Button>
            </div>
            <Toasty open={openToasty.open} onClose={() => setOpenToasty(false)} severity={openToasty.severity} message={openToasty.message}/>
        </>
    )
}

export default Edit 