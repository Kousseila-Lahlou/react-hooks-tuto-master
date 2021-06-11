import './style.css'
import {Card} from "@material-ui/core";
import {useState} from "react";
import Rating from '@material-ui/lab/Rating';

const MovieCard = (props) => {
    const {movieprops} = props
    const [value, setValue] = useState(movieprops.rating);
    const URI = 'http://localhost:3001/'
    return (
        <Card className={'h-card'}>
            <div className={'img-film'}>
                <img src={URI + movieprops.poster}/>
            </div>
            <div className={'info-film'}>
            <span>Title : {movieprops.title} </span>
            <span>Description : {movieprops.description} </span>
            </div>
            <div className={'info-rating'}>
            <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        />
        </div>
        </Card>
    )
}

export default MovieCard
