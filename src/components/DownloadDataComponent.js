import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './NavbarComponent';
import { Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import axios from 'axios';
import config from '../constants';

const baseUrl = config.url.API_URL;
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

const useStyles = makeStyles({
  option: {
    fontSize: 15,
    '& > span': {
      marginRight: 10,
      fontSize: 16,
    },
  },
  button: {
    marginTop: 15,
    marginBottom: 15,
  },
});


const DownloadData = () => {
  const classes = useStyles();
  const [languages, setLanguages] = useState([]);
  const [language, setLanguage] = useState('');

  useEffect(() => {
    const getAllLanguages = async () => {
      const {data, error} = await axios.get(`${baseUrl}/languages/`);
      setLanguages(data.results.map(lang => {
        return {
          walsCode: lang.walsCode,
          name: lang.name
        }
      }));
    }
    getAllLanguages();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="d-flex justify-content-sm-center" style={{marginTop: 30, marginBottom: 30}}>
        <Autocomplete 
          style={{width: 300}}
          options={languages}
          classes={{
            option: classes.option
          }}
          autoHighlight
          onHighlightChange={(event, option) => setLanguage(option.name)}
          getOptionLabel={(option) => option.name}
          renderOption={(option) => (
            <React.Fragment>
              ({option.walsCode}) {option.name}
            </React.Fragment>
          )}
          renderInput={(params) => (
            <TextField
            {...params}
            label="Choose a language to download"
            variant="outlined"
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password'
            }}
            />
          )}
        />
        </div>
        <div className="d-flex justify-content-sm-center">
          <a href={`${baseUrl}/downloads/words/`} taget="_blank" download>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.button}
              startIcon={<SaveIcon />}
            >
              Download
            </Button>
          </a>
        </div>
    </div>
  );
}
export default DownloadData;