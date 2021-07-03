import './resetpwd.css'
import {Button, Card, TextField} from "@material-ui/core";
import {useContext, useState} from "react";
import {useHistory} from "react-router-dom";
import AuthContext from "../../context/auth.context";
import ResetPwd from "./pages/resetpwd/resetpwd";

const ResetPwd = () => {
    const router = useHistory();
    const auth = useContext(AuthContext)

    const [password, setPassword] = useState()
    const [confirmePassword, setConfirmePassword] = useState()
    const send = () => {

    }
    return (
        <div className={'register-container'}>
            <Card className={'register-card'}>
                <h1>Reset password</h1>

                <TextField label="Nouveau mot de passe"
                           value={password}
                           onChange={event => setPassword(event.target.value)}
                           type="password"
                           variant="outlined"/>
                <TextField label="confirmer mot de passe"
                           value={confirmePassword}
                           onChange={event => setConfirmePassword(event.target.value)}
                           type="password"
                           variant="outlined"/>
                <Button onClick={send} variant="contained" color="primary">
                    Envoyer
                </Button>
            </Card>
        </div>
    )
}
export default ResetPwd