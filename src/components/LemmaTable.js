import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import MaterialTable from 'material-table';
import axios from 'axios';
import config from '../constants';
import SubmitDialog from './LemmaSubmitComponent';
import SubmitDimensionDialog from './DimensionsComponent';
import * as qs from 'query-string';

const baseUrl = config.url.API_URL;
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

let dims = [];

const LemmaTable = (props) => {
  const [columns, setColumns] = useState([
    {title: 'Name', field: 'name'}
  ]);
  const [data, setData] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const [error, setError] = useState();

  // process the data from api and format it for the table
  useEffect(() => {
    const getData = async () =>{
      const response = await axios.get(`${baseUrl}/lemmas/${props.lemma}/`);
      let dimOptions = [];
      response.data.related_words.map(word => {
        dims = dims.concat(Object.keys(word.dimensions));
        dimOptions = dimOptions.concat(
          Object.keys(word.dimensions).map(key => {
            let opts = {};
            word.dimensions[key].map(feat => {
              opts[feat] = feat;
            })
            return {
              [key]: opts
            }
          })
        )
      })
      // make sure dimensions and options are unique
      dims = [...new Set(dims)];
      let dimOps = Array.from(new Set(dimOptions.map(JSON.stringify))).map(JSON.parse);
      setColumns(
        columns.concat(dims.map((dim, i) => {
          return {
            title: dim,
            field: dim.toLowerCase(),
            lookup: dimOps[i][dim]
            }
          })
        )
      )
      // set data for table in a corresponding format
      setData(
        response.data.related_words.map(word => {
          let result = {name: word.name}
          word.tagset.map(tag => {
            result[Object.keys(tag)[0].toLowerCase()] = tag[Object.keys(tag)[0]];
          })
          return result
        })
      )
    }
    getData();
  }, [])

  const handleAdd = () => {
    setShowDialog(false);
  };

  const handleUpdate = () => {
    setShowDialog(false);
  };
  const handleDimensionAdd = async (dimension) => {
    const {data, error} = await axios.get(`${baseUrl}/dimensions/${dimension}/`);
    const options = {};
    data.options.map(feat => {
      options[feat] = feat;
    })
    setColumns(
      columns.concat({
        title: dimension,
        field: dimension.toLowerCase(),
        lookup: options
      })
    )
  };
  return(
    <div>
      <div className="d-flex justify-content-sm-center">
        <SubmitDimensionDialog dimensions={dims ? dims.length > 0 : []} handleSubmit={handleDimensionAdd}/> 
      </div>
      <div className="d-flex justify-content-lg-center">
      <MaterialTable 
        title={`${props.lemma}`}
        columns={columns}
        data={data}
        editable={{
          onRowAdd: newData => 
            new Promise((resolve, reject) => {
              setShowDialog(true);
              resolve();
            }),
          onRowUpdate: (newData, oldData) => 
            new Promise((resolve, reject) => {
              setShowDialog(true);
              resolve();
            }),
        }
        }
      />
      {showDialog ? <SubmitDialog show={true} onSubmit={handleUpdate}/> : null}
    </div>
    </div>
  )
}

export default LemmaTable;
