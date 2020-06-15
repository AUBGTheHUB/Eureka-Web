import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../constants';
import { useParams, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import NavbarUnimorph from './NavbarComponent';

const useStyles = makeStyles({
  root: {
      marginTop: 15,
      marginBottom: 15,
      minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 12,
  },
  body: {
    fontSize: 18
  }
});


const baseUrl = config.url.API_URL;
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';


export default function WordNameComponent(){
    const { slug } = useParams();
    const classes = useStyles();
    const [ word, setWord ] = useState(null);
    
    useEffect(() => {
        const getWord = async () => {
            const {data, error} = await axios.get(`${baseUrl}/words/${slug}/`);
            setWord(data);
        }
        getWord();
    }, []);
    const bull = <span className={classes.bullet}>•</span>;
  
    return (
      <div>
          <NavbarUnimorph />
          <div className="d-flex justify-content-lg-center">
            <Card className={classes.root}>
                <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Word Detail
                </Typography>
                <Typography variant="h5" component="h2">
                    {bull}{word ? word.name.substring(word.length/2, word.length) : ''}{bull}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {word ? word.lemma.pos.name : ''}
                </Typography>
                <Typography className={classes.body} variant="body2" component="p">
                    <b>language:</b> {word ? word.lemma.language.name : ''}
                </Typography>   
                <Typography variant="body2" className={classes.body} component="p">
                    <b>Lemma</b>: <Link to={`/lemmas/${word ? word.lemma.name: ''}`}>{word ? word.lemma.name : ''}</Link>        
                </Typography>
                {!word ? null : word.tagset.features.map(feat =>
                    <Typography className={classes.body} variant="body2" component="p">
                        <b>{feat.dimension.name}</b>: {feat.name}
                    </Typography>    
                )}
                </CardContent>
                <CardActions>
                <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
          </div>
      </div>
    );
}