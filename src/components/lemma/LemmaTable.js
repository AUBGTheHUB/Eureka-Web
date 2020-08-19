import React, { useState, useEffect } from 'react';
import SubmitDialog from '../submit-dialogs/SubmitLemmaDialog';
import SubmitDimensionDialog from '../submit-dialogs/SubmitDimension';
import MaterialTable from 'material-table';
import lemmaService from '../../services/lemma';
import dimensionService from '../../services/dimension';

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
    const getData = async () => {
      const lemma = await lemmaService.getLemmaTable(props.lemma);
      setColumns(lemma.columns);
      setData(lemma.data);
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
    const {data, error} = await dimensionService.getOne(dimension);
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
