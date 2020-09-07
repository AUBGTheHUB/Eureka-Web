import React from 'react';
const DimensionTable = ({ name, dimension }) => {
    const data = Object.entries(dimension);
    let maxLen = data[0][1]["words"].length;
    const numCols = data.length;
    data.forEach(feat => {
        maxLen = feat[1]["words"].length > maxLen ? feat[1]["words"].length : maxLen;
    })
    console.log(data);
    console.log(maxLen);
    return (
        <div key={maxLen}>
            <h1>{name}</h1>
            <hr/>
            {data.map((feat, i) => {
                return(
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th key={i} scope="col">{feat[0]}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[...Array(maxLen)].map((x, i) =>{
                                return(
                                    <tr key={i}>
                                        {[...Array(numCols)].map((y, k) =>
                                                <td key={k}>{feat[1]["words"][i]}</td>
                                        )
                                        }         
                                    </tr>
                                    )
                                    }
                                )
                            }
                        </tbody>
                    </table>
                )
                })
            }
        </div>
    )
}

export default DimensionTable;