import { useState, useEffect } from "react"
import axios from 'axios'
import Grid from '@mui/material/Grid'
import { useNavigate } from "react-router-dom"

import CustomersCard from '../../components/CustomerCard.js'

const List = () => {

    const history = useNavigate()
    
    const [customers,setCustomers] = useState([])

    useEffect(() => {
        axios.get('https://reqres.in/api/users')
        .then(response => {
            const {data} = response.data

            setCustomers(data)
        })
        
    },[])
    
    const handleRemoveCustomer = id => {
        axios.delete(`https://reqres.in/api/users/${id}`)
        .then(() => {
            const newCustomerState = customers.filter(customer => customer.id !== id)
            setCustomers(newCustomerState)
        })
    }

    const handleEditCustomer = id => {
        history(`/customers/edit/${id}`)
    }

    return(
        <>            
            <Grid container rowSpacing={4}>
                {
                    customers.map(item => (
                        <Grid item xs={12} md={4} ls={3}>
                            <CustomersCard 
                                id = {item.id}
                                name={item.first_name}
                                lastname={item.last_name}
                                email={item.email}
                                avatar={item.avatar}
                                onRemoveCustomer={handleRemoveCustomer}
                                onEditCustomer={handleEditCustomer}
                            />
                        </Grid>
                    ))
                }
            </Grid> 
        </>
    )
}

export default List