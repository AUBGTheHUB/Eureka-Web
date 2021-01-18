import React, { useEffect, useState } from 'react';
import DimensionTable from './DimensionTable';

/**
 * Creates an array of rows for each dimension, features as columns
 * @param {*} dimensions array consisting of arrays with dimension with features
 */
function getDimTables(dimensions){
    let rows = [];
    let i = 0;
    while(i<dimensions.length){
        if(i === dimensions.length-1){
            rows.push(
                <div key={i} style={{textAlign: "center"}} className="row">
                    <hr/>
                    <div key={i+1} className="col-md">
                        <DimensionTable name={dimensions[i][0]} dimension={dimensions[i][1]}/>
                    </div>
                </div>
            );
            break;
        }
        rows.push(
            <div key={i} className="row">
            <hr/>
                <div key={i+1} className="col-md border-right">
                    <DimensionTable name={dimensions[i][0]} dimension={dimensions[i][1]}/>
                </div>
                <div className="col-md">
                    <DimensionTable name={dimensions[i+1][0]} dimension={dimensions[i+1][1]}/>
                </div>
            </div>
        );
        i += 2;
    }
    return rows;
}

function getData(rawData) {
    let data = {};
    rawData.related_words.forEach(word => {
        word.tagset.features.forEach(feat => {
            let arr = data[feat.dimension.name] ? data[feat.dimension.name] : {}
            let words = data[feat.dimension.name] && data[feat.dimension.name][feat.name] && data[feat.dimension.name][feat.name]["words"] ? data[feat.dimension.name][feat.name]["words"] : [];
            if(!words.includes(word.name)){
                words.push(word.name)
            }
            data = {
                ...data, 
                [feat.dimension.name]: {
                    ...arr,
                    [feat.name]: {
                        words: [...words]
                    }
                }}
        })
    })
    return data;
}
const DefaultTemplate = (props) => {
    const [data, setData] = useState(null);

    // process the data from api and format it for the table
    useEffect(() => {
        setData(getData(props.data));
    }, []);

    if (!data){
        return null;
    }
    else{
        const dimTables = getDimTables(Object.entries(data));
        return (
            <div className="container">
                {dimTables.map(row => row)}
            </div>
        )
    }
}

export default DefaultTemplate;