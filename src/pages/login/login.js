import './login.css'
import {Button, Card, TextField} from "@material-ui/core";
import { useHistory } from 'react-router';
import { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import API from '../../api/api';
import AuthContext from "../../context/auth.context"


const Login = () => {
    const router = useHistory();
    const auth = useContext(AuthContext)

    const [email, setEmail]=useState()
    const [password, setPassword]=useState()
    const send3 =()=>{
        const params3 ={email,password}
        API.post('/login',params3)
                .then(res => {
                    if (res.data.error) {
                        Swal.fire(res.data.msg, '', 'warning')
                    } else {
                        auth.login();
                        localStorage.setItem('auth', 'true')
                        Swal.fire('','', 'success')
                        .then(ok => {
                        if (ok.isConfirmed) {
                            console.log(auth.auth)
                            router.push('/movie')
                        }
                    })
                 }
                })
                .catch(err=>{
                    console.log (err);
                     Swal.fire('uyuyu','','error')
                })
       
    }
        useEffect(() => {
            console.log (auth.auth)
            if (auth.auth) {
                router.push ('/movie')
            }
        }, [])
    return (
        <div className={'register-container'}>
            <Card className={'register-card'}>
                <h1>Login</h1>
                <TextField label="Email"
                           type="search"
                           value={email}
                           onChange={event =>setEmail (event.target.value)}
                           variant="outlined"/>
                <TextField label="Mot de passe"
                           type="search"
                           value={password}
                           onChange={event =>setPassword (event.target.value)}
                           variant="outlined"/>
                <Button onClick={send3} variant="contained" color="primary">
                    Login
                </Button>
                <span onClick={() => router.push('/register')} color="inherit">register</span>
            </Card>
        </div>
    )
}
export default Login