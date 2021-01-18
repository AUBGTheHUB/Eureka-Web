import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
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
                bordered={false}
                classes="table-width"
                rowClasses="row-class"
            />
        </div>
    )
}

export default DimensionTable;