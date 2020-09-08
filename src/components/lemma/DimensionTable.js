import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import { formatDimensionDataTable } from '../../utils';

const DimensionTable = ({ name, dimension }) => {
    const { columns, data } = formatDimensionDataTable(dimension);
    return (
        <div className="mx-auto">
            <h3 style={{textAlign: "center"}}>{name}</h3>
            <BootstrapTable 
                keyField='id' 
                data={ data } 
                columns={ columns }
                cellEdit={ cellEditFactory({mode: 'click'}) }
                bordered={false}
                classes="table-borderless table-width"
            />
        </div>
    )
}

export default DimensionTable;

        // <div className="mx-auto" key={maxLen}>
        //     <h1>{name}</h1>
        //     <table className="table table-borderless">
        //         <thead>
        //             <tr>
        //                 {data.map((feat, i) => {
        //                     return(
        //                         <th key={i} scope="col">{feat[0]}</th>
        //                     )
        //                 })}
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {[...Array(maxLen)].map((x, i) =>{
        //                 return(
        //                     <tr key={i}>
        //                         {[...Array(numCols)].map((y, k) =>
        //                                 <td contentEditable="true" key={k}>{data[k][1]["words"][i]}</td>
        //                         )
        //                         }         
        //                     </tr>
        //                     )
        //                     }
        //                 )
        //             }
        //         </tbody>
        //     </table>
        // </div>