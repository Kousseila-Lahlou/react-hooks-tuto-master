import { Card, TextField, Button } from "@material-ui/core"
import { useState } from "react";
import { useHistory } from 'react-router';
import Swal from 'sweetalert2';
import API from '../../api/api';


const AddMovie = () => {
    const [title, setTitle] = useState ('')
    const [description, setDescription] = useState ('')
    const [rating, setRating] = useState ('')
    const [poster, setPoster] = useState ('')
    const send1 =()=>{
        const params2 ={title,description,rating,poster}
        API.post('/add',params2)
                .then(res => {
                    if (res.data.error) {
                        Swal.fire(res.data.msg, '', 'warning')
                    } else {
                        Swal.fire('', '', 'success')
                    .then(ok => {
                        if (ok.isConfirmed) {
                            router.push('/movie')
                        }
                    })
                 }
                })
                .catch(err=>{
                     Swal.fire('','','error')
                })
       
    }
    const router =useHistory()
    return (
        <div className={'register-container'}>
            <Card className={'register-card'}>
                <h1>Add New Movie</h1>
                <TextField label="Title"
                            type="search"
                            value={title}
                            onChange={event => setTitle(event.target.value)}
                            variant="outlined"/>
                <TextField label="Description"
                            type="search"
                            value={description}
                            onChange={event => setDescription(event.target.value)}
                            variant="outlined"/>
                <TextField label="Rating"
                            type="search"
                            value={rating}
                            onChange={event => setRating(event.target.value)}
                            variant="outlined"/>
                <TextField label="Poster"
                            type="search"
                            value={poster}
                            onChange={event => setPoster(event.target.value)}
                            variant="outlined"/>
                <Button  onClick={send1} variant="contained" color="primary ">
                    Envoyer
                </Button>

            </Card>
        </div>
        )
}
export default AddMovie;