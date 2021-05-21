import './login.css'
import {Button, Card, TextField} from "@material-ui/core";
import { useHistory } from 'react-router';

const Login = () => {
    const router = useHistory ();
    return (
        <div className={'register-container'}>
            <Card className={'register-card'}>
                <h1>Login</h1>
                <TextField label="Email"
                           type="search"
                           variant="outlined"/>
                <TextField label="Mot de passe"
                           type="search"
                           variant="outlined"/>
                <Button variant="contained" color="primary">
                    Login
                </Button>
                <span onClick={() => router.push('/register')} color="inherit">register</span>
            </Card>
        </div>
    )
}
export default Login